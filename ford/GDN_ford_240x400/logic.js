'use strict';

	var banner = document.querySelector('.banner'),
		logo = document.querySelector('.logo'),
		kv = document.querySelector('.kv'),
    text11 = document.querySelector('.text-1-1'),
    text12 = document.querySelector('.text-1-2'),
    smallCar = document.querySelector('.small-car'),
    text21 = document.querySelector('.text-2-1'),
    text22 = document.querySelector('.text-2-2'),
    text23 = document.querySelector('.text-2-3'),
    text31 = document.querySelector('.text-3-1'),
    text32 = document.querySelector('.text-3-2'),
    text41 = document.querySelector('.text-4-1'),
    text42 = document.querySelector('.text-4-2'),
    car1 = document.querySelector('.car-1'),
    text51 = document.querySelector('.text-5-1'),
    text52 = document.querySelector('.text-5-2'),
    text61 = document.querySelector('.text-6-1'),
    text62 = document.querySelector('.text-6-2'),
    car2 = document.querySelector('.car-2'),
    text71 = document.querySelector('.text-7-1'),
    text72 = document.querySelector('.text-7-2'),
    text81 = document.querySelector('.text-8-1'),
    text82 = document.querySelector('.text-8-2'),
    car3 = document.querySelector('.car-3'),
    cta = document.querySelector('.cta'),
    ctaBig = document.querySelector('.cta-big'),
    mainName = document.querySelector('.main-name'),

		tl = new TimelineMax({repeat: -1})
		// {repeat: -1}
	;

tl.to([logo], 1, {opacity: 1}, 0)
.to([text11, text12, smallCar], 0.1, {opacity: 1})
  .staggerFromTo([text11, text12, smallCar], 0.8, {x: -215}, {x: 0}, 0.5)
  .to(kv, 0.8, {opacity: 1}, '-=1')
	.to([text21, text22, text23], 1.2, {opacity: 1})
  .to ([text11, text12, smallCar, text21, text22, text23], 0.5, {opacity: 0}, '+=1')
  .to(kv, 1, {y: 55})
  .to(cta, 1, {opacity: 1}, '-=1')
  .to([text31, text32], 1.2, {opacity: 1}, '-=0.5')
	.to(car1, 1.5, {opacity: 1}, '-=1')
  .fromTo(car1, 1, {x: -223}, {x: 0}, '-=1')
  .to([text41, text42], 1.2, {opacity: 1}, '-=1')
  .to([text31, text32, car1, text41, text42], 0.8, {opacity: 0}, '+=1.5')

  .to([text51, text52], 1.2, {opacity: 1})
	.to(car2, 1.5, {opacity: 1}, '-=1')
  .fromTo(car2, 1, {x: -223}, {x: 0}, '-=1')
  .to([text61, text62], 1.2, {opacity: 1}, '-=1')
  .to([text51, text52, car2, text61, text62], 0.8, {opacity: 0}, '+=1.5')

  .to([text71, text72], 1.2, {opacity: 1})
	.to(car3, 1.5, {opacity: 1}, '-=1')
  .fromTo(car3, 1, {x: -223}, {x: 0}, '-=1')
  .to([text81, text82], 1.2, {opacity: 1}, '-=1')
  .to([text71, text72, car3, text81, text82, cta], 0.8, {opacity: 0}, '+=1.5')

  .to(kv, 0.8, {css: {'height': '60px'}})
  .to(kv, 0.5, {y: -5}, '-=0.5')
  .to(ctaBig, 1.5, {opacity: 1})
  .to(mainName, 1.5, {opacity: 1}, '-=1.5')
  .to([mainName, ctaBig, kv], 0.5, {opacity: 0}, '+=1')
