window.addEventListener("load", function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        markers: true
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        markers: true
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#live",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        markers: true
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#members",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        markers: true
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#blog",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        markers: true
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        markers: true
    },
});