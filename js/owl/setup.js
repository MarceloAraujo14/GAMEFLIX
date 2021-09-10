$('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    video:true,
    margin:1,
    lazyLoad:true,
    center:true,
    responsive:{
        360:{
            items:1
        },
        500:{
            items:2,
            margin:2
        },
        900:{
            items:3,
            margin:5
        },
        1400:{
            items:5,
            margin:5

        }
    
    }
})