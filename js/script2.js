// This javascript file is made to avoid errors
document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {

		// Adding a "JavaScript is Enabled" Body Class

		document.querySelector("body").classList.add("js");

		var slider = tns({
			container: ".imgContainer",
            autoWidth: true,
			controlsContainer: "#controls",
            prevButton: ".previous",
  			nextButton: ".next",
			nav: false,
			autoplayButtonOutput: false,
			items: 1,
			slideBy: "page",
			
		});
	}
});