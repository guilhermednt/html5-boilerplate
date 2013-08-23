$( document ).ready(function() {
	$("button.forgetIt").click(function() {
		$("textarea#secret").attr("placeholder", "Forget what? I've never seen you. ;)");
	});
	$("button.submit").click(function() {
		$("form").slideUp();
		$("div.done").fadeIn();
	});
	$("button.another").click(function() {
		$("form").slideDown();
		$("div.done").fadeOut();
	});
});