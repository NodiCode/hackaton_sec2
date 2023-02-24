const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const sliderImgs = document.querySelectorAll('.slider-img');

let currentImgIndex = 0;

sliderImgs[currentImgIndex].style.display = 'block';

prevBtn.addEventListener('click', () => {
    if (currentImgIndex === 0) {
      currentImgIndex = sliderImgs.length - 1;
    } else {
      currentImgIndex--;
    }
    updateImage();
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentImgIndex === sliderImgs.length - 1) {
      currentImgIndex = 0;
    } else {
      currentImgIndex++;
    }
    updateImage();
  });
  
  // function to update the current image
  function updateImage() {
    sliderImgs.forEach(img => img.style.display = 'none');
    sliderImgs[currentImgIndex].style.display = 'block';
  }

  