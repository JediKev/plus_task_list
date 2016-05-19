// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-datepicker
//= require turbolinks
//= require_tree .

function hoverIn(event) {
	$(event.target).addClass('text-muted');
	$(event.target).closest('a').children('i')
		.removeClass('fa-square-o')
		.addClass('fa-check-square-o');
}

function hoverOut(event) {
	$(event.target).removeClass('text-muted');
	$(event.target).closest('a').children('i')
		.removeClass('fa-check-square-o')
		.addClass('fa-square-o');
}

$(document).ready(function(){
	$('.task').hover(hoverIn, hoverOut);
});
	
