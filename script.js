/*const themeMap = {
	dark: "light",
	light: "dark",
};

const theme =
	localStorage.getItem("theme") ||
	((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
	const current = localStorage.getItem("theme");
	const next = themeMap[current];

	bodyClass.replace(current, next);
	localStorage.setItem("theme", next);

}

document.getElementById("themeButton").onclick = toggleTheme;
*/
var t = false;
function toggleIt(x) {
	if (t) {
		document.getElementById("toggleOff").classList.remove("fa-toggle-off");
		document.getElementById("toggleOff").classList.add("fa-toggle-on");
		document.getElementById("toggleOff").style =
			"--fa-primary-color: rgb(0, 122, 255); --fa-secondary-color: rgb(255, 255, 255);";
		document.body.classList.remove("dark");
		document.body.classList.add("light");
	} else {
		document.getElementById("toggleOff").classList.remove("fa-toggle-on");
		document.getElementById("toggleOff").classList.add("fa-toggle-off");
		document.getElementById("toggleOff").style =
			"--fa-primary-color: rgb(255, 255, 255);";
		document.body.classList.remove("light");
		document.body.classList.add("dark");
	}
	t = !t;
}
