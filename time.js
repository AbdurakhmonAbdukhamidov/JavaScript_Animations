let hour = document.querySelector('.hour1')
let minute = document.querySelector('.minute1')
let second = document.querySelector('.second1')

let didline = new Date('08-08-2023') 
let now =  new Date();
let time12 = new Date();
time12 = didline - now 

setInterval(()=>{
    hour.innerText = String((Math.floor((time12 / 1000 / 60 / 60) % 24)));
    minute.innerText = String(Math.floor((time12 / 1000 / 60) % 60));
    second.innerText = String(Math.floor((time12 / 1000) % 60))

},100)



