(function() {

    function setVisibility() {
        button.style.visibility = 'visible';
    }

    function removeVisibility() {
        button.style.visibility = 'hidden';
    }

    function startAnimation() {
        var tl = new TimelineMax({repeat: -1});
        tl
            .to([bannerHeader, photo], 0.8, {opacity: 1})
            .to(visa, 0.5, {opacity: 1})
            .fromTo(effect, 2, {scale: 0, opacity: 0}, {scale: 1, opacity: 1}, 0)
            .fromTo(effectTwo, 0.1, {opacity: 0}, {opacity: 1}, 0)
            .fromTo(effectTwo, 6, {backgroundPosition: "-250px, 40%", ease: Power0.linear}, 
                {backgroundPosition: "-100px, 40%"}, '-=2')
            .fromTo(effectTwo, 0.5, {opacity: 1}, {opacity: 0}, '-=0.9')
            .fromTo(effect, 2, {opacity: 1, scale: 1}, {opacity: 0, scale: 0}, '-=2')
            .to(photo, 1, {opacity: 0})

            .to([bannerHeader, photo, visa, effect], 0.8, {opacity: 0}, '-=1.8')

            .staggerTo("#text-discount div", 0.8, {x: 245, ease:Power1.easeInOut}, 0.2, '-=1.5')
            .to(["#brands div:first-child", "#brands div:last-child"], 0.5, {opacity: 1})
            .staggerTo("#text-discount div", 0.8, {x:620, ease:Power1.easeInOut}, 0.2, "+=2")
            .to(["#brands div:first-child", "#brands div:last-child"], 0.5, {opacity: 0}, "-=0.8")

            .staggerTo("#text-visa-more div", 0.8, {x:245, ease:Power1.easeInOut}, 0.2, '-=1')
            .to("#visa-img", 0.5, {opacity: 1})
            .to("#visa-img", 0.5, {opacity: 0, onComplete: setVisibility}, '+=2')
            .to(button, 0.5, {opacity: 1})
            .staggerTo("#text-visa-more div", 0.8, {x:620, ease:Power1.easeInOut}, 0.2, "+=3")
            .to(button, 0.1, {opacity: 0, onComplete: removeVisibility}, '-=0.5')

            .to("#text-legal", 0.5, {opacity: 1}, '-=0.5')
            .to(visa, 0.5, {opacity: 1}, '-=0.5')
            .to(["#text-legal", visa], 0.5, {opacity: 0}, '+=3')

    }


    window.onload = function () {
        var bannerHeader = document.getElementById("bannerHeader"),
            photo = document.getElementById("photo"),
            visa = document.getElementById("visa"),
            textDiscount = document.querySelectorAll("#text-discount div"),
            brands = document.querySelectorAll("brands"),
            textVisaMore = document.querySelectorAll("#text-visa-more div"),
            visaImg = document.getElementById("visa-img"),
            button = document.getElementById("button"),
            textLegal = document.getElementById("text-legal"),
            effect = document.getElementById("effect");
            effectTwo = document.getElementById("effect-two")

        startAnimation();
    }



})();
