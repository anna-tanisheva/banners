'use strict';

var banner = document.getElementById('banner'),
		frame1 = document.getElementById('frame-1'),
		frame2 = document.getElementById('frame-2'),
		logo = document.getElementById('logo'),
		text1 = document.getElementById('text-1'),
		text2 = document.getElementById('text-2'),
		thumbUp = document.getElementsByClassName('thumb-up'),
		text3 = document.getElementById('text-3'),
		text4 = document.getElementById('text-4'),
		arrow1 = document.getElementById('arrow1'),
		arrow2 = document.getElementById('arrow2'),
		tl = new TimelineMax({repeat: -1});
		// {repeat: -1}

tl.to([banner, logo, frame1], 1, {opacity:1}, 0)
.fromTo(text1, 1, {x: -137, opacity: 0}, {x: 0, opacity: 1}, '-=1')
.fromTo(text2, 1, {x: -98, opacity: 0}, {x: 0, opacity: 1}, '-=0.2')
.to(thumbUp[0], 1, {opacity: 1})
.to([frame1], 1, {opacity: 0}, '+=2')
.to([frame2], 1, {opacity: 1}, '-=0.4')
.fromTo(text3, 1, {x: -137, opacity: 0}, {x: 0, opacity: 1}, '-=0.5')
.fromTo(text4, 1, {x: -98, opacity: 0}, {x: 0, opacity: 1}, '-=0.2')
.fromTo(arrow1, 1, {opacity: 0, x: -15}, {opacity: 1, x: 0})
.fromTo(arrow2, 1, {opacity: 0, x: -25}, {opacity: 1, x: 0}, '-=1')
.fromTo(arrow2, 0.75,{x: 0}, {x: 5, yoyo: true, repeat: 4, ease:Linear.easeNone })
.to(thumbUp[1], 1, {opacity: 1}, '-=5')
.to([frame2, logo, arrow2, arrow1], 0.5, {opacity:0})
