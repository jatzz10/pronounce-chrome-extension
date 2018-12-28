$(function() {
	$('#btn').click(function() {
		var content = $('#content').val();
		chrome.tts.speak(content, {'rate': 1.0});
	});
});