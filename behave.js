const ham = document.querySelector('.hamburger');
const nav_menus = document.querySelector('.nav-menu');

ham.addEventListener("click", ()=>{
    ham.classList.toggle("active");
    nav_menus.classList.toggle("active");
})

// changing color based on white black
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bxs-moon');
    if(this.classList.toggle('bxs-sun')){
        body.style.background = 'powderblue';
        body.style.color = '#020617';
        body.style.transition = '2s';
        
    }

    else{
        body.style.background = '#020617';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})

// //show as a message
let user = prompt("enter your name");
alert(`Have a nice day dear ${user}`);
confirm(`and your name length is: ${user.length}`);







