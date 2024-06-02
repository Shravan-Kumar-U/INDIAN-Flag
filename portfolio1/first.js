const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSection  = document.querySelectorAll(".main-content");
function PageTransition(){
    // button click active class
    for(let i =0 ; i< secBtn.length;i++){
        secBtn[i].addEventListener("click",function (){
            let currentBtn = document.querySelectorAll(".active-btn")
            currentBtn[0].className= currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn'; 
        })
    }
}
PageTransition();