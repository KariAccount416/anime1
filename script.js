// 円のアニメーション: 大きめで回転と上下移動
anime({
    targets: '.circle',
    translateY: [
        { value: '-30vh', duration: 3000 },
        { value: '30vh', duration: 3000 }
    ],
    scale: [
        { value: 1.2, duration: 3000 },
        { value: 0.8, duration: 3000 }
    ],
    rotate: '2turn',
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

// 四角形のアニメーション: 左右の揺れと拡大縮小
anime({
    targets: '.square',
    translateX: [
        { value: '-40vw', duration: 4000 },
        { value: '40vw', duration: 4000 }
    ],
    scale: [
        { value: 0.6, duration: 4000 },
        { value: 1.4, duration: 4000 }
    ],
    rotate: '1turn',
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

// 三角形のアニメーション: 拡大縮小と上下の移動
anime({
    targets: '.triangle',
    translateY: [
        { value: '40vh', duration: 5000 },
        { value: '-40vh', duration: 5000 }
    ],
    scale: [
        { value: 0.5, duration: 5000 },
        { value: 1.5, duration: 5000 }
    ],
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

// 多角形のアニメーション: 回転しながら画面を横切る
anime({
    targets: '.polygon',
    translateX: [
        { value: '50vw', duration: 6000 },
        { value: '-50vw', duration: 6000 }
    ],
    rotate: '3turn',
    scale: [
        { value: 0.7, duration: 6000 },
        { value: 1.3, duration: 6000 }
    ],
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

// 線のアニメーション: 横に移動しながら伸縮する
anime({
    targets: '.line',
    translateX: [
        { value: '-60vw', duration: 7000 },
        { value: '60vw', duration: 7000 }
    ],
    scaleX: [
        { value: 0.3, duration: 7000 },
        { value: 1.5, duration: 7000 }
    ],
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

// 点のアニメーション: 小さい円として、画面中央から消えるように縮小
anime({
    targets: '.dot',
    translateY: [
        { value: '-30vh', duration: 5000 },
        { value: '30vh', duration: 5000 }
    ],
    scale: [
        { value: 1, duration: 5000 },
        { value: 0.2, duration: 5000 }
    ],
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});
