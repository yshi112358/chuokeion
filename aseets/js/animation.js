gsap.set('.back-img__1', { autoAlpha: 0 });
gsap.set('.back-img__2', { autoAlpha: 0 });

gsap.to('.back-img__1', {
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.back-img__1',
        start: 'top center',
        markers: false
    }
});
gsap.to('.back-img__2', {
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.back-img__2',
        start: 'top center',
        markers: false
    }
});