const imagesList = Array.from(document.querySelectorAll('.image-container')),
    dotsList = Array.from(document.querySelectorAll('.dot')),
    activeImageClass = 'image-container_active',
    activeDotClass = 'dot_active'
let index = 0;

const changeSlide = (i) => {
  index = currentIndex(i)

  changeActiveImage(index)
  changeActiveDot(index)
}

const currentIndex = (i) => {
  index += i;

  if (index > imagesList.length - 1) {
    index = 0
  } else if (index < 0) {
    index = imagesList.length - 1
  }

  return index
}

const changeActiveImage = (index) => {
  const activeImage = document.querySelector('.image-container_active');

  activeImage.classList.remove(activeImageClass);
  imagesList[index].classList.add(activeImageClass);
}

const changeActiveDot = (index) => {
  const activeDot = document.querySelector('.dot_active')

  activeDot.classList.remove(activeDotClass);
  dotsList[index].classList.add(activeDotClass);
}