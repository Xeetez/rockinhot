const image = document.querySelectorAll('.image-slider img');
const container = document.querySelector('.image-slider');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let interval;
let index = 0;


 
export function slideImage(){
    
    displayImage();
    previous.addEventListener('click', previousSlide);
    next.addEventListener('click', nextSlide);
    container.addEventListener('mouseout', () =>{
        interval = setInterval(autoSlide, 4000);
        // console.log('mouse out');

    });
    container.addEventListener('mouseover', () =>{
        clearInterval(interval);
        // console.log('mouse over');
    });

    
}

function displayImage() {
    for(let i = 0; i < image.length; i++){
        image[i].classList.remove('display');
    }
    image[index].classList.add('display');
}

function previousSlide(){

    index--;
     if(index < 0){
        index = image.length-1;
    }
    displayImage();
    clearInterval(interval);
    console.log('opr');

}

function nextSlide(){
    
    index ++;
    if(index >= image.length){
        index=0;
    }
    displayImage();
    clearInterval(interval);
}

function autoSlide(){
    index++;
    if(index >= image.length){
        index=0;
    }
    displayImage();
      
}

    


