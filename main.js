const productRating = document.querySelector(".productRating");

const rating = 3;

function createStarRating(total, rating, container) {
  if (rating <= total) {
    const fullRating = Math.floor(rating);
    const halfRating = rating % 1;
    const restRating = Math.floor(total - rating);

    function addFullStar() {
      const newI = document.createElement("i");
      newI.classList.add("fa-solid");
      newI.classList.add("fa-star");
      container.appendChild(newI);
    }
    function addStar() {
      const newI = document.createElement("i");
      newI.classList.add("fa-regular");
      newI.classList.add("fa-star");
      container.appendChild(newI);
    }
    function addHalfStar() {
      const newI = document.createElement("i");
      newI.classList.add("fa-solid");
      newI.classList.add("fa-star-half-stroke");
      container.appendChild(newI);
    }

    for (let i = 0; i < fullRating; i++) {
      addFullStar();
    }
    for (let i = 0; i < halfRating; i++) {
      addHalfStar();
    }
    for (let i = 0; i < restRating; i++) {
      addStar();
    }
  }else{
    console.error("Rating is greater than total")
  }
}

createStarRating(5, rating, productRating);
