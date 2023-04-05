let span=Array.from(document.getElementsByTagName("span"))
span.forEach((elem)=>{
    elem.addEventListener("click",function(){
        elem.classList.toggle("orange")
    })
});