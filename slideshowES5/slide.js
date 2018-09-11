//make an array for the images
var images = ["images/image_1.jpeg","images/image_2.jpg","images/image_3.jpg"];
var Timer;
var CurrentSlide = 0;
var play = true;
var pause = document.querySelector('.menu__pause');

document.querySelector('.menu__next').addEventListener("click", NextSlide);
document.querySelector('.menu__prev').addEventListener("click", PrevSlide);
document.addEventListener("keydown", keyboard);
document.querySelector('.menu__pause').addEventListener("click", PausePlay);

//set a interval so that the slider starts its auto mode
Timer = setInterval(Slider, 3000);

//make a seperate function for the pause
function PauseSlideShow() {
    pause.innerText = 'Play';
    play = false;
    //stop the interval
    clearInterval(Timer);
}

//seperate function for play
function PlaySlideShow() {
    pause.innerText = "Pause";
    play = true;
    //start the interval again
    Timer = setInterval(Slider, 3000);
}

//add the functions to the button with a if/else in another function
function PausePlay() {
    if(play) {
        PauseSlideShow();
    }else {
        PlaySlideShow();
    }
}


function keyboard(event) {
    if(event.keyCode === 37) {
        PrevSlide();
    }
    if(event.keyCode === 39) {
        NextSlide();
    }
}

function GoToSlide(n) {
    document.querySelector('.slide').src = images[CurrentSlide];

    /*add n to the images length and use a modulus to get the remainder. 
    the remainder that comes out is the number for the current slide*/
    CurrentSlide = (n+images.length)%images.length;
}

function NextSlide() {
    //add 1 to the images length
    GoToSlide(CurrentSlide+1);
}

function PrevSlide() {
    //substract 1 of the images length
    GoToSlide(CurrentSlide-1);
}

function Slider() {
    document.querySelector('.slide').src = images[CurrentSlide];

    /*auto slider..if the number of the currentslide is smaller than the images length add 1
    when the number is higher go back to 0*/
        if(CurrentSlide < images.length -1) {
            CurrentSlide++;
        }else {
            CurrentSlide = 0;
        }
}
