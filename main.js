let chicken_repeat=setInterval(() => {
    let container=document.getElementById('checken_planet')
   
    let ch=document.createElement('img');
    ch.src='imgs/chickenBlue.png'
    ch.style.width='50px'
    container.appendChild(ch)
    document.body.appendChild(ch)
}, 200);

setTimeout(() => {
    clearInterval(chicken_repeat)
    rocket.style.cssText=`display:block;
    width:50px`;
}, 10000);