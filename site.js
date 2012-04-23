// JavaScript Document by mrm.mahmoodi@gmail.com

var picWidth = 700,
currentSlide = 0,
divShow_img, liBtn, picsLen, go2slide, nextSlide, prvSlide;

window.onload=function(){
	 divShow_img=document.getElementsByClassName('b_shadow').item(0).getElementsByClassName('show_img').item(0);
	 liBtn=document.getElementsByClassName("b_shadow").item(0).getElementsByClassName("img_nav").item(0).getElementsByTagName('li');
	
	var picsLen = liBtn.length;
	
		go2slide = function (n){
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		
		divShow_img.style.left = -n*picWidth + 'px';
		currentSlide=n;
	};

	nextSlide = function (){
		go2slide(currentSlide+1);
	};
	prvSlide = function (){
		go2slide(currentSlide-1);
	};

	for (var i = 0; i < picsLen; i++) {
		(function(j){
			liBtn.item(j).onclick = function(){
				go2slide(j);
			};
		})(i);
	}
}