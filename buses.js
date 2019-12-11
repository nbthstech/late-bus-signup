"use strict";
class Buses {
	static onSignIn(googleUser) {
		const name = googleUser.getBasicProfile().getName()
		const email = googleUser.getBasicProfile().getEmail()
		Buses.user = googleUser
		Buses.profile = googleUser.getBasicProfile()
		if (!(Buses.user.getHostedDomain() === "nbtschools.org")) {
			alert("Not a valid google account");
			document.cookie = "isValid=false"
			document.getElementById("submit_button").hidden = true;
		} else {
			document.cookie = "isValid=true"
			document.getElementById("submit_button").hidden = false;
		}
	}
	static init() {
		gapi.load('auth2', function () {
			const guath = gapi.auth2.getAuthInstance()
			console.log("init called")
			gapi.auth2.init({
				client_id: '911898925511-qpuga83oe7to9vccnjrilqah9orn23j1.apps.googleusercontent.com',
				hosted_domain: 'nbtschools.org'
			}).then(() => {
				console.log("init finished")
			}, () => {
				console.log("init failed")
			})
		})

	}
}

function onSignIn(googleUser) {
	Buses.onSignIn(googleUser)
	document.getElementById('ID').value = Buses.profile.getEmail().substring(0, Buses.profile.getEmail().indexOf('@'));
	document.getElementById('Name').value = Buses.profile.getName();
	document.getElementById('EMail').value = Buses.profile.getEmail();
}

function init() {
	Buses.init()
}
//# sourceMappingURL=buses.js.map