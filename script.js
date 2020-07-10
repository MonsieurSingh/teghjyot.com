var t = false;

function toggleIt(x) {
	if (t) {
		//dark
		document.getElementById("toggleOff").classList.remove("fa-toggle-off");
		document.getElementById("toggleOff").classList.add("fa-toggle-on");
		document.getElementById("houseTime").classList.remove("fa-house-day");
		document.getElementById("houseTime").classList.add("fa-house-night");
		document.getElementById("toggleOff").style =
			"--fa-primary-color: rgb(0, 122, 255); --fa-secondary-color: rgb(255, 255, 255);";
		document.body.classList.remove("light");
		document.body.classList.add("dark");
	} else {
		//light
		document.getElementById("toggleOff").classList.remove("fa-toggle-on");
		document.getElementById("toggleOff").classList.add("fa-toggle-off");
		document.getElementById("houseTime").classList.remove("fa-house-night");
		document.getElementById("houseTime").classList.add("fa-house-day");
		document.getElementById("toggleOff").style =
			"--fa-primary-color: rgb(255, 255, 255);";
		document.body.classList.remove("dark");
		document.body.classList.add("light");
	}
	t = !t;
}

toggleIt();
