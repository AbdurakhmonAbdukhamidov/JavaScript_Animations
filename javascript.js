let body = document.body;
let removeSection = document.querySelector('section');
removeSection = window.getComputedStyle(removeSection).height
let line = document.querySelector('.line')
let first = document.querySelector("#third");
let bodyHeight = window.getComputedStyle(body).height
let title = document.querySelectorAll('.title')
const hour = document.querySelector('.hour');
const gas = document.querySelector('.lets_go');
const car = document.querySelector('.car');



// Step 2: Check if the element is visible



addEventListener("scroll", function(e){
    line.style.width = 100 / ((parseInt(bodyHeight) - parseInt(removeSection))  / this.window.scrollY) + "%"
    
});

title.forEach(element => {

    element.addEventListener('click', ()=>{
        let text = element.nextElementSibling
        if(window.getComputedStyle(text).display == "block"){
            text.style.display = "none"
        }else{
            text.style.display = "Block"
        }
        
    })
    
});


setInterval(()=>{
   let time = new Date()
  hour.innerText = time.getHours() +":"+time.getMinutes()+":"+time.getSeconds();
//   console.log(Date().prototype.getTime());
},100)


// car 

gas.addEventListener('click', ()=>{
    let pos = 0;
    setInterval(go_to_finish,100)
    
    function go_to_finish() {
        if(pos>= 65){
            clearInterval(go_to_finish)
            car.style.left = 0 + "%"
        }else{
        pos++;
        car.style.left = pos + "%"
        }
    }
    
})



