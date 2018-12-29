$(function() {
	$('#btn').click(function() {
		let content = $('#content').val();
		chrome.tts.speak(content, {'rate': 1.0});
	});
});