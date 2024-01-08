function init(){
    fixHeader();
}

function fixHeader(){

    var header = document.querySelector(".header");

    window.addEventListener("scroll", function(){
        if(window.scrollY > 1){
            header.classList.add("active");
        }else{
            header.classList.remove("active");
        }
    })
}


$(function(){
    init();
})