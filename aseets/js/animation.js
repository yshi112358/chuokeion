window.addEventListener("load", function () {
    gsap.to('#loading', {
        opacity: 0,
        visibility: "hidden"
    })
});

//スムーススクロールのスクリプト
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top;
        $('body,html').animate({ scrollTop: target }, 500);
        return false;
    });
});

gsap.timeline({
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


(function () {
    'use strict';

    /* 文字列を分割しspanで囲む */
    (function () {
        const jsSlogan = document.querySelectorAll('.slogan');
        jsSlogan.forEach(target => {
            let newText = '';
            const text = target.textContent;
            const result = text.split('');
            for (let i = 0; i < result.length; i++) {
                newText += '<span>' + result[i] + '</span>';
            }
            target.innerHTML = newText;
        });
    })();

    /* MVアニメーション */
    (function () {


        /* 以下アニメーション */
        const jsLoaderBg = '.js-loader-bg'; // カーテン（黒い背景）
        const jsDot = '.js-loader-dot-wrap > span'; // ドット
        const jsBubble = '.js-mv-bubble [id*=item]'; // バブル（丸い図形）

        const jsSlogan = '.slogan span'; // メインビジュアルのタイトル
        const jsName = '.name';
        const jsTitle = '.title';
        const jsMenubar = '.menubar';
        const jsMain = 'main';

        const jsLeadText = '.js-mv_title-lead'; // メインビジュアルのリード文
        const jsHeader = '.js-header'; // ヘッダー


        //初期状態をセット
        gsap.set(
            [jsSlogan, jsName],
            //アニメーションさせない静止状態を指定する
            {
                opacity: 0,
                y: 30
            }
        );


        gsap.set(jsMain, {
            "margin-left": "0%"
        });

        gsap.set(jsTitle, {
        });

        gsap.set(jsMenubar, {
            transformOrigin: "left",
            scaleX: 0
        });

        // timelineを作成
        const tl = gsap.timeline();

        tl.to(jsDot, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8,
            stagger: {
                amount: 0.5,
                from: "start",
                ease: 'power4.inOut'
            }
        }

        ).to(jsSlogan, {
            /* 前のアニメーションが完了する0.1秒前に実行 */
            opacity: 1,
            y: 0,
            stagger: {
                amount: 1,
                from: "start",
                ease: "sine.in"
            }
        },
            "-=0.1"

        ).to(jsName, {
            opacity: 1,
            y: 0,
        },
            "+=0.5"

        ).to(jsMain, {
            /* 前のアニメーションが完了する0.1秒前に実行 */
            "margin-left": "7%"
        },
            "-=0.2"

        ).to(jsMenubar, {
            scaleX: 1
        },
            '<'
        );
    })();

})();