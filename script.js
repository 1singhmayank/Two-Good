const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function videoanimation(){
    var vdio=document.querySelector("#videocon")
var playy=document.querySelector("#play")

vdio.addEventListener("mouseenter",function (){
    gsap.to(playy,{
  scale:1,
  opacity:1
    })
}
)
vdio.addEventListener("mouseleave",function (){
    gsap.to(playy,{
  scale:0,
  opacity:0
    })
}
)
vdio.addEventListener("mousemove",function (dets){
    gsap.to(playy,{
 left:dets.x-70,
top:dets.y-80
})
}
)
}
videoanimation();

gsap.from(".page1 h1",{

 y:30,
 opacity:0,
 delay:0.5,
 duration:0.5,
 stagger:0.1
})
gsap.from("#videocon",{

 scale:0.8,
 opacity:0,
 delay:0.5,
 duration:0.3,
 stagger:0.1
})

var hover=document.querySelector(".float")
var bodyy=document.querySelector(".boddy")

bodyy.addEventListener("mouseenter",function (){
    gsap.to(hover,{
  scale:1,
  opacity:1
    })
}

)
bodyy.addEventListener("mouseleave",function (){
    gsap.to(hover,{
  scale:0,
  opacity:0
    })
}

)

bodyy.addEventListener("mousemove",function (dets){
    gsap.to(hover,{
 left:dets.x-70,

top:dets.y-70
})
}
)


document.querySelector("#child1").addEventListener("mouseenter",function(){
gsap.to(".float",{

scale:1
})
})

document.querySelector("#child1").addEventListener("mouseleave",function(){
gsap.to(".float",{

scale:0
})
})

document.querySelector("#child2").addEventListener("mouseenter",function(){
gsap.to(".float",{

scale:1
})
})

document.querySelector("#child2").addEventListener("mouseleave",function(){
gsap.to(".float",{

scale:0
})
})

document.querySelector("#child3").addEventListener("mouseenter",function(){
gsap.to(".float",{

scale:1
})
})
document.querySelector("#child3").addEventListener("mouseleave",function(){
  gsap.to(".float",{
  
  scale:0
  })
  })
document.querySelector("#child4").addEventListener("mouseenter",function(){
gsap.to(".float",{

scale:1
})
})
document.querySelector("#child4").addEventListener("mouseleave",function(){
  gsap.to(".float",{
  
  scale:0
  })
  })
