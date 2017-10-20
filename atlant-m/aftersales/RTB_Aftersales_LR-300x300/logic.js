'use strict';

	var banner = document.querySelector('.banner'),
		logo = document.querySelector('.logo'),
		kv1 = document.querySelector('.kv-1'),
		bigWheel = document.querySelector('.big-wheel'),
		smallWheelInner = document.querySelector('.small-wheel-inner'),
		smallWheelAll = document.querySelector('.small-wheel-all'),
		kv2 = document.querySelector('.kv-2'),
		headline = document.querySelector('.headline'),
		sl3 = document.querySelector('.sl-3'),
		sl4 = document.querySelector('.sl-4'),
		dealer = document.querySelector('.dealer'),
		cta = document.querySelector('.cta'),
		disclaimer = document.querySelector('.disclaimer-text'),
		playFlag = true,
		tl = new TimelineMax({repeat: -1})
	;



function startAnimation(){
	tl
	.to([logo, kv1], 1, {opacity:1}, 0)

	.to(kv1, 2.5, {scale: 0.75, y: -20, ease: Power2.easeInOut}, 0)
	.to(bigWheel, 0.2, {opacity: 1}, '-=1.5')
	.to(bigWheel, 1.5, {scale: 0.2, ease: Power2.easeInOut}, '-=1.9')
	.to(smallWheelInner, 0, {opacity: 1}, '-=1.5')
	.fromTo(smallWheelInner, 1.5, {scale: 0}, {scale: 1, ease: Power3.easeInOut}, '-=1.5')
	.to(smallWheelAll, 0.5, {opacity: 1}, '-=1')
	.fromTo(smallWheelAll, 2, {scale: 0}, {scale: 1, ease: Power3.easeInOut}, '-=1.5')

	.to(headline, 1, {opacity: 1}, '-=0.5')
	.from(headline, 1, {x: -10}, '-=1')
	.to(cta, 1, {opacity: 1}, '-=1')
	.from(cta, 1, {x: 10}, '-=1')
	.to(headline, 1, {opacity: 0, x: 10}, '+=1.8')
	.to([cta], 0.5, {opacity: 0}, '-=1')

	.to(kv2, 0.1, {opacity: 1}, '-=1')
	.from(kv2, 2, {x: -540}, '-=1.7')
	.to(sl3, 1, {opacity: 1}, '-=1')
	.from(sl3, 1, {x: -10}, '-=1')
	.to(sl3, 1, {opacity: 0, x: 10}, '+=1')
	.to(sl4, 1, {opacity: 1}, '-=0.2')
	.from(sl4, 1, {x: -10}, '-=1')
	.to([kv1, bigWheel, smallWheelInner, smallWheelAll], 0.3, {opacity: 0}, '-=0.5')
	.fromTo(kv2, 2, {scale: 1, x: 0, y: 0}, {scale: 1.7, x: 23, y: -75}, '-=1')
	.to([sl4, kv2], 1, {opacity: 0}, '+=1')
	.to(disclaimer, 1, {opacity: 1}, '-=0.5')
	.to(disclaimer, 1, {opacity: 0}, '+=2.5')
	.to([dealer, cta], 1, {opacity: 1})

	.to(kv1, 1, {opacity:1}, '-=1')
	.fromTo(kv1, 2.5, {scale: 1, y: 0}, {scale: 0.75, y: -20, ease: Power2.easeInOut}, '-=1')
	.to(bigWheel, 0.2, {opacity: 1}, '-=1.5')
	.fromTo(bigWheel, 1.5, {scale: 1}, {scale: 0.2, ease: Power2.easeInOut}, '-=2')
	.to(smallWheelInner, 0, {opacity: 1}, '-=1.5')
	.fromTo(smallWheelInner, 1.5, {scale: 0}, {scale: 1, ease: Power2.easeInOut}, '-=1.5')
	.to(smallWheelAll, 0.5, {opacity: 1}, '-=1')
	.fromTo(smallWheelAll, 2, {scale: 0}, {scale: 1, ease: Power2.easeInOut}, '-=1.5')


	.to([cta, kv1, smallWheelAll, bigWheel, smallWheelInner, dealer], 0, {opacity: 0}, '+=2')
}



function restartAnimation(){
	tl.restart();
}



function scrollingOn(){
	scrolling.style.pointerEvents = 'auto';
	scrollingButton.style.top = '3px';
	disclaimer.style.top = 0;
}
function scrollingOff(){
	scrolling.style.pointerEvents = 'none';
}

function bannerRollOver(){
	TweenMax.to(ctaArrow, 0, {opacity: 1, x: 0});
	TweenMax.to(ctaArrow, 0.2, {opacity:0, x: 10, ease: Power1.easeIn, onComplete: ctaArrowBack});
	function ctaArrowBack(){
		TweenMax.to(ctaArrow, 0, {x: -10});
		TweenMax.to(ctaArrow, 0.3, {opacity:1, x: 0, ease: Power1.easeOut});
	}
}



function init(){
	// console.log('banner loaded');
	banner.style.opacity = 1;
	// playPause.addEventListener('click', playPauseClick);
	// btn.addEventListener('mouseover', bannerRollOver);
	// scrollingButton.addEventListener('mousedown', sliderButtonMouseDown);
	// document.addEventListener('mouseup', sliderButtonMouseUp);
	startAnimation();
}

window.addEventListener('load', init);
