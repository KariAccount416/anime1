// アニメーションの設定
anime({
    targets: '.circle',
    translateX: [
        { value: 300, duration: 2000 },
        { value: 0, duration: 2000 }
    ],
    translateY: [
        { value: -150, duration: 2000 },
        { value: 0, duration: 2000 }
    ],
    scale: [
        { value: 1.5, duration: 2000 },
        { value: 1, duration: 2000 }
    ],
    rotate: '1turn',
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    duration: 4000
});

anime({
    targets: '.square',
    translateX: [
        { value: -200, duration: 3000 },
        { value: 0, duration: 3000 }
    ],
    translateY: [
        { value: 200, duration: 3000 },
        { value: 0, duration: 3000 }
    ],
    scale: [
        { value: 1.2, duration: 3000 },
        { value: 1, duration: 3000 }
    ],
    rotate: '1turn',
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    duration: 4000
});

anime({
    targets: '.triangle',
    translateX: [
        { value: -250, duration: 4000 },
        { value: 0, duration: 4000 }
    ],
    translateY: [
        { value: -150, duration: 4000 },
        { value: 0, duration: 4000 }
    ],
    scale: [
        { value: 1.3, duration: 4000 },
        { value: 1, duration: 4000 }
    ],
    rotate: '1turn',
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    duration: 5000
});

anime({
    targets: '.polygon',
    translateX: [
        { value: 200, duration: 4000 },
        { value: 0, duration: 4000 }
    ],
    translateY: [
        { value: -200, duration: 4000 },
        { value: 0, duration: 4000 }
    ],
    scale: [
        { value: 1.4, duration: 4000 },
        { value: 1, duration: 4000 }
    ],
    rotate: '1turn',
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    duration: 6000
});
