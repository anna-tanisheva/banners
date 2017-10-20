(function(){
var container,
	content, text1, text2, back, light, top, right, bottom, left, man, korea, phoneNew, logoSamsung, logoGalaxy, textOne, textTwo, cta, spaceSmall;

window.onload = function() {
	container = document.getElementById("container_dc");
		content = document.getElementById("content_dc");
		text1 = document.querySelector('.text-1');
		text2 = document.querySelector('.text-2');
		back = document.querySelector('.back');
		top = document.querySelector('.top');
		right = document.querySelector('.right');
		bottom = document.querySelector('.bottom');
		left = document.querySelector('.left');
		spaceSmall = document.querySelector('.space-small');
		light = document.querySelector('.light');
		man = document.querySelector('.man');
		korea = document.querySelector('.korea');
		border = document.querySelector('.border');
		logoSamsung = document.querySelector('.logo-samsung');
		logoGalaxy = document.querySelector('.logo-galaxy');
		textOne = document.querySelector('.text-1');
		textTwo = document.querySelector('.text-2');
		cta = document.querySelector('.cta'); 
		
	startAnimation();
};

/*function onHotSpotClick(){
	window.open(window.clickTag,'_blank');
}*/

function startAnimation () {

	var tl = new TimelineMax();

	tl
		.to([content], 1, {opacity: 1})
		.to([man, back, top, right, bottom, left, korea], 1, {opacity: 1}, '-=2')
		.to(back, 0.5, {opacity: 0}, '+=0.5')
		.to(korea, 0.5, {opacity: 0}, '-=0.5' )
		.to([border, spaceSmall], 1, {opacity: 1}, '-=2')
		.to(light, 1, {opacity: 1})


		.to(top, 10, {x: 20, y: -150, rotation: -15,ease: Power4.easeOut}, '-=1.3')
		.to(right, 10, {x: 100, y: 0, rotation: 20, ease: Power4.easeOut}, '-=10')
		.to(bottom, 10, {x: 20, y: 250, rotation: 20, ease: Power4.easeOut}, '-=10')
		.to(left, 10, {x: -200, y: 0, rotation: -15, ease: Power4.easeOut}, '-=10')
		.to([top, right, left, bottom], 1, {opacity:0}, '-=9')

		.to(man, 15, {x: 70, y: -50, rotation: -10}, '-=13')


		.to([logoGalaxy, logoSamsung], 2, {opacity: 1}, '-=8')
		.staggerFromTo([textOne, textTwo], 2, {opacity: 0, y: 40}, {opacity: 1, y: 0}, 0.5, '-=8')

};
})();