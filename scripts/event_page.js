let menuItem = {
	"id": "pronounce",
	"title": "Pronounce",
	"contexts": ["selection"]
}
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
	if (clickData.menuItemId == "pronounce" && clickData.selectionText) {
		chrome.tts.speak(clickData.selectionText, {'rate': 1.0});
	}
});
