let body = document.body;
let removeSection = document.querySelector('#a1');
removeSection = window.getComputedStyle(removeSection).height
let line = document.querySelector('.line')
let bodyHeight = window.getComputedStyle(body).height

addEventListener("scroll", function(e){
    line.style.width = 100 / ((parseInt(bodyHeight) - parseInt(removeSection))  / this.window.scrollY) + "%"
});