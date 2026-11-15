const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
const targetImage = document.querySelector(".profile-image img");
let i = 0;

targetImage.addEventListener("click", () => {

    targetImage.style.opacity = "0";

    setTimeout(() => {

        i++;

        if (i === images.length) {
            i = 0;
        }

        targetImage.src = "images/" + images[i];

        targetImage.style.opacity = "1";

    }, 500);

});