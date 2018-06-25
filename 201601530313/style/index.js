//定义popUp函数，并规定弹出窗口的大小
 function popUp(winURL){
	window.open(winURL,"popup","width=600,height=600");
}
window.onload = prepareLinks;
function prepareLinks(){
	if(!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		if(links[i].getAttribute("class") == "popup"){
			links[i].onclick = function(){
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}

function showpic(whichpic){
 	var source = whichpic.getAttribute("href");
 	//获取图片链接 
 	var placeholder = document.getElementById("placeholder"); 
 	//获得占位符
 	placeholder.setAttribute("src",source); 
	//更新占位符
	var text = whichpic.getAttribute("title");
	//获取文字信息
	var description = document.getElementById("text-message");
	description.firstChild.nodeValue=text;
 }