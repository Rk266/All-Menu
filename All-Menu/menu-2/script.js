let menu = document.querySelector('#menu');
let navbar = document.querySelector('nav');
let close = document.querySelector('#close');

menu.onclick =  () => {
    navbar.classList.toggle('open');
}

close.onclick = () => {
    navbar.classList.remove('open');
}