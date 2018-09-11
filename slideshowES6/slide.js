//make an array for the images
const images = ["images/image_1.jpeg","images/image_2.jpg","images/image_3.jpg"];
let timer;
let currentSlide = 0;
let play = true;
const pause = document.querySelector('.menu__pause');

//make a seperate function for the pause
const pauseSlideShow = () => {
    pause.innerText = 'Play';
    play = false;
    //stop the interval
    clearInterval(timer);
}

//seperate function for play
const playSlideShow = () => {
    pause.innerText = "Pause";
    play = true;
    //start the interval again
    timer = setInterval(slider, 3000);
}

//add the functions to the button with a if/else in another function
const pausePlay = () => {
    if(play) {
        pauseSlideShow();
    }else {
        playSlideShow();
    }
}


const keyboard = (event) => {
    // Javascript is de beste taal ooit -V
    // Daar ben ik het volledig mee eens -L
    if(event.keyCode === 37) {
        prevSlide();
    }
    if(event.keyCode === 39) {
        nextSlide();
    }
}

const goToSlide = (n) => {
    document.querySelector('.slide').src = images[currentSlide];

    /*add n to the images length and use a modulus to get the remainder. 
    the remainder that comes out is the number for the current slide*/
    currentSlide = (n+images.length)%images.length;
}

const nextSlide = () => {
    //add 1 to the images length
    goToSlide(currentSlide+1);
}

const prevSlide = () => {
    //substract 1 of the images length
    goToSlide(currentSlide-1);
}

const slider = () => {
    document.querySelector('.slide').src = images[currentSlide];

    /*auto slider..if the number of the currentslide is smaller than the images length add 1
    when the number is higher go back to 0*/
        if(currentSlide < images.length -1) {
            currentSlide++;
        }else {
            currentSlide = 0;
        }
}

document.querySelector('.menu__next').addEventListener("click", nextSlide);
document.querySelector('.menu__prev').addEventListener("click", prevSlide);
document.addEventListener("keydown", keyboard);
document.querySelector('.menu__pause').addEventListener("click", pausePlay);

//set a interval so that the slider starts its auto mode
timer = setInterval(Slider, 3000);