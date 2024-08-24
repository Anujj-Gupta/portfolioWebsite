function loaderAnimation() {
    var loader = document.querySelector(".landingPage")
    setTimeout(function () {
        loader.style.top = "-110%"
    }, 3000)
}
loaderAnimation()

function loopTextAnimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to(".marq",{
                transform:'translateX(-200%)',
                duration:3,
                repeat:-1,
                ease:"none"
            })
            gsap.to(".marq img",{
                rotate:180
            })
        }
        else{
            gsap.to(".marq",{
                transform:'translateX(00%)',
                duration:3,
                repeat:-1,
                ease:"none"
            })
            gsap.to(".marq img",{
                rotate:0
            })
        }
    })
}
loopTextAnimation()

function horizontalScroll(){
    gsap.to(".horizontal h1",{
        transform: "translateX(-150%)",
        scrollTrigger:{
            trigger : ".horizontal",
            scoller : "body",
            start : "top 15%",
            end:"top -90%",
            scrub: true,
            pin: true,
        }
    })
}
horizontalScroll()

function webPageScroll(){
    document.addEventListener('DOMContentLoaded', function() {
        let scrolling = document.querySelectorAll(".dp");
        console.log(scrolling);
        scrolling.forEach(function(dets){
            console.log(dets);
            dets.addEventListener('click',function(event){
                event.preventDefault();
                const pageId = dets.getAttribute("data-page");
                const targetElement = document.getElementById(pageId);
                targetElement.scrollIntoView({behavior:"smooth"});
            });
        });
    });    
}
webPageScroll()