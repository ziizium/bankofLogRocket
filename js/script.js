var checkbox = document.getElementById("themer");
var invertor = document.getElementById("inverter");
var themerLabel = document.getElementById("themer-label");

checkbox.addEventListener("change", function () {
	// Triggers repaint in most browsers:
	invertor.setAttribute("media", this.checked ? "screen" : "none");
	// Forces repaint in Chrome:
	invertor.textContent = invertor.textContent.trim();
});

if (
	checkbox.hasAttribute("disabled") &&
	themerLabel.hasAttribute("data-state") &&
	themerLabel.getAttribute("data-state") === "disabled"
) {
	checkbox.removeAttribute("disabled");
	themerLabel.removeAttribute("data-state");
}
