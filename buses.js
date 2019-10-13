"use strict";


class Buses {
    static onSignIn(googleUser) {
        alert("SignedIn");
        document.getElementById(iForm).style.display("inline-block");

        document.getElementById(iForm).style.display("inline-block");
        document.getElementById("iForm").style.display("inline-block");
        Buses.profile = googleUser.getBasicProfile();
        const email = Buses.profile.getEmail();
        Buses.id = email.substring(0, email.lastIndexOf("@"));
        if (!email.endsWith("nbtschools.org")) {
            alert("Not a valid google account");
            throw new Error("Not a valid google account");
        }
        const divButton = document.getElementById("SignIn");
        divButton.hidden = true;
    }
    static submit() {
        alert("Submission");
        
    }
}
Buses.busTable = document.getElementById("busTable");
function onSignIn(googleUser) {
    alert("SignedIn");

    Buses.profile = googleUser.getBasicProfile();
    const email = Buses.profile.getEmail();
    Buses.id = email.substring(0, email.lastIndexOf("@"));
    console.log(Buses.id);
    if (!email.endsWith("nbtschools.org")) {
        alert("Not a valid google account");
        throw new Error("Not a valid google account");
    }
    const divButton = document.getElementById("SignIn");
    divButton.hidden = true;
}

//# sourceMappingURL=buses.js.map