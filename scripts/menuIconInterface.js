
export function menuClick(){
    const menuButton = document.querySelector('.menu-icon');
    const subMenu = document.querySelector('.sub');
    const close = document.querySelector('.close-menu');

    
    // open sub menu when clicked
    menuButton.addEventListener('click', (e) =>{
    
            subMenu.style.display = 'block';

    });

    // close sub menu
     close.addEventListener('click', (e) => {
        subMenu.style.display = 'none';
});

 
    // control displaying sub menu if the width is full
    setInterval(func, 2);

    function func(){
            if(self.innerWidth > 960){
                
                subMenu.style.display = 'none';
            }
    }
}




