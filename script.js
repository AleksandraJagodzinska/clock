
function setDate() {
    const now = new Date();

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


    const second = now.getSeconds();
    const secondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const secondDegrees = ((mins/60)*360)+90;
    hourHand.style.transform =`rotate(${minsDegrees}deg)`;

    const hour = now.getMinutes();
    const hourDegrees = ((hour/12)*360)+90;
    hourHand.style.transform =`rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);