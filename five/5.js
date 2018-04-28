function popUp(winURL){
	window.open(winURL,"popUp","width=1000,height=1000");
}
window.onload = prepareLinks;
function prepareLinks(){
	var links = document.getElementByTagName("a");
	for(var i=0;i<links.length;i++){
		if(links[i].getAttribute("class") == "popUp"){
			links[i].onclick = function(){
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}
