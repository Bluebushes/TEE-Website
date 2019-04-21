var scrolledTop = document.getElementsByTagName("BODY")[0];
var navWrapper = document.getElementsByClassName('nav-wrapper');
if(scrolledTop.scrollTop===0){
	navWrapper.style.color = 'purple';
}