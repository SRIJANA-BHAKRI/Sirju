// gsap.to("#one",{
//     width:"100%",
//     ease:Expo.easeInOut,
//     duration:1,
// })


gsap.to(".images",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:1,
    stagger:2
})


gsap.to(".text h1",{
ease:Expo.easeInOut,

stagger:2,
top:0
})

gsap.to(".text h1",{
ease:Expo.easeInOut,
delay:2,
stagger:2,
top:"-100%"
})
