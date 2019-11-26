"use strict";
class Buses {
	static onSignIn(googleUser) {
		const name = googleUser.getBasicProfile().getName()
		const email = googleUser.getBasicProfile().getEmail()
		Buses.profile = googleUser.getBasicProfile()
		if (!email.endsWith("nbtschools.org")) {
			alert("Not a valid google account");
			document.cookie = "isValid=false"
		} else {
			document.cookie = "isValid=true"
		}
	}
}
function onSignIn(googleUser) {
	Buses.onSignIn(googleUser)
	document.getElementById('ID').value = Buses.profile.getEmail().substring(0,Buses.profile.getEmail().indexOf('@'));
	document.getElementById('Name').value = Buses.profile.getName();
	document.getElementById('EMail').value = Buses.profile.getEmail();
}
//# sourceMappingURL=buses.js.map