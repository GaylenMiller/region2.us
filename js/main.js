// Shorthand for $( document ).ready()
$(function() {

	console.log("Ready");
	$("#headline").fitText(); // (1.2, { minFontSize: '40px', maxFontSize: '80px'});
});