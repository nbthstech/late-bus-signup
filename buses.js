"use strict";
class Buses {
	static onSignIn(googleUser) {
		alert("SignedIn");
		gapi.client.load('oauth2', 'v2', function () {
			const request = gapi.client.oauth2.userinfo.get({
				'userId': 'me'
			});
			request.execute(function (resp) {
				Buses.profile = resp
				// resp.given_name + resp.id + resp.name + resp.email
				if (!resp.email.endsWith("nbtschools.org")) {
					alert("Not a valid google account");
					throw new Error("Not a valid google account");
				} else {
					document.cookie = "isValid=true"
				}
				const divButton = document.getElementById("SignIn");
				divButton.hidden = true;
			});
		});


	}
	static submit() {
		alert("Submission");
		const busList = document.getElementsByName("bus");
		let bus = 0;
		for (let busNum of busList) {
			if (busNum.checked) {
				bus = Number.parseInt(busNum.value);
				break;
			}
		}
		const newRow = Buses.busTable.insertRow();
		const nameCol = newRow.insertCell();
		const busCol = newRow.insertCell();
		busCol.innerHTML = `${bus}`;
		nameCol.innerHTML = `${Buses.profile.getName()}: ${Buses.id}`;
	}
}
Buses.busTable = document.getElementById("busTable");

function onSignIn(googleUser) {
	alert("SignedIn");
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
//# sourceMappingURL=buses.js.map