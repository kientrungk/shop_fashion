const header =document.querySelector("header")
window.addEventListener("scroll",function(){
    x = Window.pageyoffset
    if(x>0){
        header.classList.add("sticky")    
    }
    else{
        header.classList.remove("sticky")
    }
})









    const imgposition =document.querySelectorAll(".aspect-ratio-169 img")
    console.log(imgposition)
    const imgcontainer =document.querySelector(".aspect-ratio-169")
    const dotitem =document.querySelectorAll(".dot")



    let imgnumber =imgposition.length
    let index = 0


imgposition.forEach(function(image,index){
    image.style.left =index*100 + "%"
    dotitem[index].addEventListener("click",function(){
        slider(index)

    })
    
    })
    function imgSlide(){
        index++;
        console.log(index)
        if(index>=imgnumber){index=0}
      slider(index)
     
    }
    function slider (index){
        imgcontainer.style.left ="-" +index*100+ "%"
        const dotactive = document.querySelector(".active")
        dotactive.classList.remove("active")
        dotitem[index].classList.add("active")

    }



setInterval( imgSlide ,5000)




const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
   menu.addEventListener("click",function(){
   menu.classList.toggle("block")
   })

})



//JS PRODUCT//
const bigimg = document.querySelector(".product-content-left-big-img img")
const smalimg = document.querySelector(".product-content-left-small-img img")

smailimg.forEach(function(imgitem,X){
    imgitem.addEventListener("clcik" , function(){
        bigimg.src = imgitem.src
    })
})




const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
  baoquan.addEventListener("click", function(){
      document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
      document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
  })
}

if(chitiet){
  baoquan.addEventListener("click", function(){
      document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
      document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
  })
}
      



      