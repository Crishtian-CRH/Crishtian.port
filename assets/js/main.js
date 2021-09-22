$(document).ready(function(){

    

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer","Autodidact","Freelancer","Blogger"],
        typeSpeed: 20,
        backSpeed:40,
        startdelay:200,
        loop:true,
        cursorChar:'|',
        showCursor: true,
        loopCount: false,
    });   

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav:false
            },
            700:{
                items: 1,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


});

const Mainmenu=document.querySelector('.main__menu')
const Openmenu=document.querySelector('.open__menu')
const Closemenu=document.querySelector('.close__menu')

Openmenu.addEventListener('click',show);
Closemenu.addEventListener('click',close);

function show(){
    Mainmenu.style.display='flex';
    Mainmenu.style.top='0';
}

function close(){
    Mainmenu.style.top='-100%';
    
}


