TweenMax.to('svg', 5, {
    ease: Power0.easeNone,
    repeat: -1,
    rotation: -360
})

TweenMax.set('.circle', {
    transformOrigin: 'left center',
    scale: 0
})

TweenMax.set('.arc', {
    transformOrigin: 'right bottom',
    scale: 2
})

TweenMax.staggerTo('.circle', 5, {
    scale: 2,
    repeat: -1,
}, 1)

TweenMax.staggerTo('.arc', 5, {
    scale: 0,
    repeat: -1,
}, 1)
