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
            .to(effect, 0.1, {opacity: 1}, '-=0.8')
            .fromTo(effect, 5, {y:220}, {x: -50, y: -90, ease:Power0.linear, scale: 1.5}, '-=0.8')
            // .fromTo(effect, 1, {x: -50, y: -50}, {y: 220, ease:Power0.linear, scale: 1}, '-=0.2')
            .to([bannerHeader, photo, visa, effect], 0.8, {opacity: 0})

            .staggerTo("#text-discount div", 0.8, {x: 245, ease:Power1.easeInOut}, 0.2, '-=0.8')
            .to(["#brands div:first-child", "#brands div:last-child"], 0.5, {opacity: 1})
            /*.to(, 0.5, {opacity: 1}, '-=0.5')*/
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

        startAnimation();
    }



})();
