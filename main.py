from flask import Flask, render_template, request
import json
from datetime import date

app = Flask(__name__)

signups = [{}, {}, {}]


@app.route("/")
def index():
    pass


@app.route("/hello/<string:name>/")
def hello(name):
    return render_template("test.html", name=name)


@app.route("/quote")
def quote():

    quotes = [
        "'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.' -- John Louis von Neumann ",
        "'Computer science is no more about computers than astronomy is about telescopes' --  Edsger Dijkstra ",
        "'To understand recursion you must first understand recursion..' -- Unknown",
        "'You look at things that are and ask, why? I dream of things that never were and ask, why not?' -- Unknown",
        "'Mathematics is the key and door to the sciences.' -- Galileo Galilei",
        "'Not everyone will understand your journey. Thats fine. Its not their journey to make sense of. Its yours.' -- Unknown",
    ]
    from random import randint

    randomNumber = randint(0, len(quotes) - 1)
    return quotes[randomNumber]


@app.route("/signup", methods=["POST", "GET"])
def signUp():
    name = request.args["name"]
    id = request.args["id"]
    signups[0][id] = name
    return "Ok"


@app.route("/signups")
def signUps():
    with open("signups.json", mode="w") as log:
        log.write(json.dumps(signups))

    return str(signups)


def main():
    app.debug = True
    app.run()


if __name__ == "__main__":
    main()
