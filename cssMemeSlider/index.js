const sliderImages = document.querySelectorAll(".slider_image");
const sliderLine = document.querySelector(".slider_line");
const paginationDots = document.querySelectorAll(".slider_dot");
let imageWidth = 1300;

function updatePaginationDots(index) {
    paginationDots.forEach(dot=> dot.classList.remove('dot_active'));
    paginationDots[index].classList.add('dot_active');
}

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () =>{
        sliderLine.style.transform = `translateX(${-index*imageWidth}px)`
        updatePaginationDots(index);
  })
});