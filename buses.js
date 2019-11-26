"use strict";
class Buses {
	static onSignIn(googleUser) {
		const name = googleUser.getBasicProfile().getName()
		const email = googleUser.getBasicProfile().getEmail()
		Buses.profile = googleUser.getBasicProfile()
		if (!email.endsWith("nbtschools.org")) {
			alert("Not a valid google account");
			document.cookie = "isValid=false"
			document.getElementById("submit").hidden = true;
		} else {
			document.cookie = "isValid=true"
			document.getElementById("submit").hidden = false;
		}
	}
}

function onSignIn(googleUser) {
	Buses.onSignIn(googleUser)
}
//# sourceMappingURL=buses.js.map