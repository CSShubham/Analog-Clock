secondhand=document.querySelector("#secondhand");
minhand=document.querySelector("#minutehand");
hourhand=document.querySelector("#hourhand");
//   let deg=6;
function updateClock(){
    const now=new Date();
    const second=now.getSeconds();
    const min=now.getMinutes();
    const hour=now.getHours();
    const seconddeg=second*6;
    const mindeg=min*6+second*0.1;
    const hourdeg=(hour%12===0?12:hour%12)*30+min*0.5;
    secondhand.style.transform=`rotate(${seconddeg}deg)`;
    minhand.style.transform=`rotate(${mindeg}deg)`;
    hourhand.style.transform=`rotate(${hourdeg}deg)`;
}

setInterval(updateClock, 1000);
// setTimeout(updateClock,5000)
updateClock();
darkbtn=document.querySelector("#darkbtn");
clock=document.querySelector(".clock")
numbers=document.querySelectorAll(".number")
body=document.querySelector("body");
darkbtn.addEventListener('click',()=>{
    console.log("dark btn is clickd");
    clock.classList.toggle("darkclock");
    
    for (let number of numbers) {
    number.classList.toggle("darknumber");
    }
    body.classList.toggle("darkbody");
})