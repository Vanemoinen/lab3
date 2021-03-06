'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(function(e){
		projectClick(e);
	});

}

function projectClick(e) {
    // prevent the page from reloading      
    e.preventDefault();
    var containingProject = $(this).closest(".project");
     containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    //$(this).css("background-color", "#7fff00");
}