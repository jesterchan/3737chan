    	function loaded() {
		setInterval(loop, 500)
		}
		document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
		loaded()
		}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
		loaded()
		});
		var x = 0,
		titleText = ["A", "A|", "Al", "Al|", "Al1", "Al1|", "Al1n", "Al1n|", "Al1ne", "Al1ne|"];

		function loop() {
		document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
        }
