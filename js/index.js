window.onload=function(){
	var box=document.getElementById("box");
	function fn(liid,imgUrl){
		document.getElementById(liid).onmouseover=function(){
			box.style.backgroundImage=imgUrl;
		}
	}
	fn("li01","url(img/01big.jpg)");
	fn("li02","url(img/02big.jpg)");
	fn("li03","url(img/03big.jpg)");
	fn("li04","url(img/04big.jpg)");
	fn("li05","url(img/05big.jpg)");
}