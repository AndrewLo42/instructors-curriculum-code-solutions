var carouselImages = document.querySelectorAll('.carousel-image');
var progressDots = document.querySelectorAll('.progress-dot');
var carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('click', handleClick);

var autoTimer;
var currentIndex = 0;

function moveToIndex(targetIndex) {
  for (var i = 0; i < carouselImages.length; i++) {
    if (i === targetIndex) {
      carouselImages[i].className = 'carousel-image';
      progressDots[i].className = 'fas fa-circle pointer progress-dot';
    } else {
      carouselImages[i].className = 'carousel-image hidden';
      progressDots[i].className = 'far fa-circle pointer progress-dot';
    }
  }
  currentIndex = targetIndex;
  autoPlay();
}

function getNextIndex(index, limit) {
  if (index === limit) {
    return 0;
  } else {
    return index + 1;
  }
}

function getPreviousIndex(index, length) {
  if (index === 0) {
    return length - 1;
  } else {
    return index - 1;
  }
}

function handleClick(event) {
  if (event.target.classList.contains('move-left')) {
    moveToIndex(getPreviousIndex(currentIndex, carouselImages.length));
    return;
  }

  if (event.target.classList.contains('move-right')) {
    moveToIndex(getNextIndex(currentIndex, carouselImages.length - 1));
    return;
  }

  if (!event.target.classList.contains('fa-circle')) {
    return;
  }

  for (var i = 0; i < progressDots.length; i++) {
    if (event.target === progressDots[i]) {
      moveToIndex(i);
      return;
    }
  }
}

function autoPlay() {
  clearTimeout(autoTimer);
  autoTimer = setTimeout(function () {
    var nextIndex = getNextIndex(currentIndex, carouselImages.length - 1);
    moveToIndex(nextIndex);
  }, 3000);
}

autoPlay();
