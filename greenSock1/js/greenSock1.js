gsap.to(".box", 1, {
    scale: 0.1,
    backgroundColor: "pink",
    y: 50,
    yoyo:true,
    repeat: -1,
    ease: "bounce",
    delay: 2,
    stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center",
    },
});