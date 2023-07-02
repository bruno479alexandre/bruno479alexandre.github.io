var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByTagName("img");
    var texts = document.getElementsByTagName("p");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        texts[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    texts[slideIndex - 1].classList.add("active");
}

