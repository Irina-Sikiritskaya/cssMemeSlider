const sliderImages = document.querySelectorAll(".slider_image");
const sliderLine = document.querySelector(".slider_line");
const paginationDots = document.querySelectorAll(".slider_dot");
const sliderText = document.querySelectorAll(".meme_text");
let imageWidth = window.innerWidth > 768 ? 1300 : 500;

function updatePaginationDots(index) {
    paginationDots.forEach(dot=> dot.classList.remove('dot_active'));
    paginationDots[index].classList.add('dot_active');
}

function updateText(index) {
    sliderText.forEach(text=> text.classList.remove('text_active'));
    sliderText[index].classList.add('text_active');
};


paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () =>{
        sliderLine.style.transform = `translateX(${-index*imageWidth}px)`
        updatePaginationDots(index);
        updateText(index);
  })
});