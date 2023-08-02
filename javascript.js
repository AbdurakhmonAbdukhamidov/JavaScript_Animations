let body = document.body;
let removeSection = document.querySelector('section');
removeSection = window.getComputedStyle(removeSection).height
let line = document.querySelector('.line')
let first = document.querySelector("#third");
let bodyHeight = window.getComputedStyle(body).height
let title = document.querySelectorAll('.title')



// Step 2: Check if the element is visible



addEventListener("scroll", function(e){
    line.style.width = 100 / ((parseInt(bodyHeight) - parseInt(removeSection))  / this.window.scrollY) + "%"
    
});

title.forEach(element => {

    element.addEventListener('click', ()=>{
        console.log(element.nextElementSibling);
        if(window.getComputedStyle(text).display == "block"){
            text.style.display = "none"
        }else{
            text.style.display = "Block"
        }
        
    })
    
});



