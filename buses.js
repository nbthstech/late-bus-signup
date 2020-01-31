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


	if( isMobile() ) {
		document.getElementById("SignInR").style.display = "none";
		document.getElementById("mobileSignOut").style.display="block";
	} else {
		document.getElementById("SignIn").style.display = "none";
		document.getElementById("desktopSignIn").style.display ="block";
	}


}

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
}

function isValid() {
	return getCookie("isValid")==="true"
}

function signOut() {
	const auth2 = gapi.auth2.getAuthInstance()
	auth2.signOut().then(function () {
		console.log('User signed out.')
		if (isMobile()) {
			document.getElementById("SignInR").style.display = "block"
			document.getElementById("mobileSignOut").style.display = "none"
		} else {
			document.getElementById("SignIn").style.display = "block"
			document.getElementById("desktopSignIn").style.display = "none"
		}
		setCookie("isValid", false, 0)
	})
}
function setCookie(cname, cvalue, exdays) {
	const d = new Date()
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
	const expires = "expires=" + d.toUTCString()
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
	const name = cname + "="
	const cookie = (decodeURIComponent(document.cookie)
		.split(';')
		.map(str => str.trim())
		.filter(str => str.startsWith(name))[0])
	const value = cookie === undefined || cookie === null ? "" : cookie.substring(name.length)
	return value
}

function init() {
	Buses.init()
}
//# sourceMappingURL=buses.js.map
