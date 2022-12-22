var modal_slide= 1;
var body =document.getElementById("body")
var modal =document.getElementById("modal-galereya_1")
var modal2 =document.getElementById("modal-galereya_2")
var start_modal_1=document.getElementById("modal_galereya_1_trigger")
var start_modal_2=document.getElementById("modal_galereya_2_trigger")
var span =document.getElementById("close_modal_1")
var span2 =document.getElementById("close_modal_2")

start_modal_1.onclick=function(){
    modal.style.display="block"
    modal_slide=1
    show_modal_slide();
}
start_modal_2.onclick=function(){
    modal2.style.display="block"
    modal_slide=6
    show_modal_slide();
}

span.onclick=function(){
    modal.style.display="none"
    body.style.background="#EFF0F1"

}
window.onclick = function() {
    if (event.target == modal) {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
  }
span2.onclick=function(){
    modal2.style.display="none"
    body.style.background="#EFF0F1"
}

var slideIndex=0;
showSlides();
function showSlides(){
var i;
    var slides=document.getElementsByClassName("slides")
    for(i=0;i<slides.length;i++){
slides[i].style.display="none"
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);
}

function currentSlide(n){
    show_modal_slide(modal_slide=n);
}

function show_modal_slide(n){
    var i=0
    var modal_slides_show=document.getElementsByClassName("mySlides")
    if(n>modal_slides_show.length){modal_slide=1}
    if(n<1){modal_slide=modal_slides_show.length}
    for (i=0;i<modal_slides_show.length;i++) {
        modal_slides_show[i].style.display="none"
        modal_slides_show[i].style.padding="0 0 0 30%"
        body.style.background="#EFF0F1"
    }
    modal_slides_show[modal_slide-1].style.display="block";
    body.style.background="black"
}