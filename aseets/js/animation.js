window.addEventListener("load", function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
});

// const topTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".background-1",
//         start: "top top",
//         end: "+=900",
//         scrub: 1,
//         pin: true,
//         markers: true
//     },
// });
// const topTl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".background-2",
//         start: "top top",
//         end: "+=900",
//         scrub: 1,
//         pin: true,
//         markers: true
//     },
// });