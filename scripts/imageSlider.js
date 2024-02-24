
const image = document.querySelectorAll('.image-slider img');
console.log(image);
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
        interval = setInterval(autoSlide, 3000);
        // console.log('mouse out');

    });
    container.addEventListener('mouseover', () =>{
        clearInterval(interval);
        // console.log('mouse over');
    });

    
}

function displayImage() {
    if(index < 0){
        index = image.length-1;
    } else  if(index >= image.length){
        index=0;
    }

    for(let i = 0; i < image.length; i++){
        image[i].classList.remove('displayImg');
    }
    
    image[index].classList.add('displayImg');
}

function previousSlide(){
    index--;
    displayImage();
    clearInterval(interval);
    // console.log('opr');

}

function nextSlide(){
    
    index ++;
    displayImage();
    clearInterval(interval);
}

function autoSlide(){
    index++;
    
    displayImage(index);
      
}

    


