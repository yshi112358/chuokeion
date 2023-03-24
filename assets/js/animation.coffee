ScrollTrigger.defaults scroller: '.contents'

gsap.timeline(
	scrollTrigger:
		trigger: '.container'
		start: 'top top'
		end: 'bottom bottom'
		scrub: 1 )
	.to '.photo_bg', x: -100 
	.to '.slogan', { x: 30 }, '<'

gsap.set '.menubar', scaleY: 0
gsap.set '.menu_button', x: 100
gsap.timeline(
	scrollTrigger:
		trigger: '#top'
		start: 'top+=100 top'
		end: '+=300'
		scrub: 1)
		# markers: true)
	.to '.menubar', scaleY: 1
	.to '.menu_button', x: 0, '<'

windowWidth = window.outerWidth
windowHeight = window.outerHeight

gsap.set '.menu_list', x: windowWidth
window.menuOpen = ->
	gsap.timeline()
		.to '.menu_button', opacity: 0
		.to '.menu_list', x: 0, '<'
	return
window.menuClose = ->
	gsap.timeline()
		.to '.menu_button', opacity: 1
		.to '.menu_list', x: windowWidth, '<'
	return