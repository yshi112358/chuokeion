// ローディングアニメーション
// (function () {
//     'use strict';

//     /* 文字列を分割しspanで囲む */
//     (function () {
//         const jsSlogan = document.querySelectorAll('.slogan');
//         jsSlogan.forEach(target => {
//             let newText = '';
//             const text = target.textContent;
//             const result = text.split('');
//             for (let i = 0; i < result.length; i++) {
//                 newText += '<span>' + result[i] + '</span>';
//             }
//             target.innerHTML = newText;
//         });
//     })();

//     /* MVアニメーション */
//     (function () {
//         const jsDot = '.js-loader-dot-wrap > span'; // ドット

//         const jsSlogan = '.slogan span'; // メインビジュアルのタイトル
//         const jsName = '.name';
//         const jsTitle = '.title';
//         const jsMenubar = '.menubar';
//         const jsMain = 'main';


//         gsap.set(
//             [jsSlogan, jsName],
//             {
//                 opacity: 0,
//                 y: 30
//             }
//         );

//         gsap.set(jsTitle, {
//             "align-items": "center",
//             "justify-content": "center"
//         });

//         gsap.set(jsMain, {
//             "margin-left": "0%"
//         });

//         gsap.set(jsMenubar, {
//             transformOrigin: "left",
//             scaleX: 0
//         });

//         gsap.set(jsDot, {
//             opacity: 0,
//             y: -50
//         });

//         const tl = gsap.timeline();

//         tl.to(
//             jsSlogan,
//             {
//                 opacity: 1,
//                 y: 0,
//                 stagger: {
//                     amount: 1,
//                     from: "start",
//                     ease: "sine.in"
//                 }
//             }
//         ).to(
//             jsName,
//             {
//                 opacity: 1,
//                 y: 0,
//                 stagger: {
//                     amount: 1,
//                     from: "start",
//                     ease: "sine.in"
//                 }
//             },
//             '+=0.5'
//         ).to(
//             '#loading',
//             {
//                 opacity: 0,
//                 duration: 3.0
//             }
//         ).to(
//             '#loading',
//             {
//                 visibility: "hidden"
//             }
//         ).to(
//             jsMain,
//             {
//                 "margin-left": "7%"
//             },
//             "-=0.2"
//         ).to(
//             jsMenubar,
//             {
//                 scaleX: 1
//             },
//             '<'
//         );
//     })();

// })();

//スムーススクロールのスクリプト
// $(function () {
//     $('a[href^="#"]').click(function () {
//         var href = $(this).attr('href');
//         var target = href == '#' ? 0 : $(href).offset().top;
//         $('body,html').animate({ scrollTop: target }, 500);
//         return false;
//     });
// });

ScrollTrigger.defaults({ scroller: ".scrollable_area" });
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
    },
});
tl.to('.photo_bg', {
    x: -100,
});