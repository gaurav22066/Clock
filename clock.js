const clock = document.querySelector('.clock');
const letters = ['I', 'N', 'T', 'E', 'R', 'S', 'T', 'E', 'L', 'L', 'A', 'R'];

// Create clock numbers
letters.forEach((letter, i) => {
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = letter;

    // Calculate position
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const radius = 145;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    number.style.left = `${x + 170}px`;
    number.style.top = `${y + 170}px`;
    number.style.transform = 'translate(-50%, -50%)';

    clock.appendChild(number);
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate degrees
    const hourDegree = (hours + minutes / 60) * 30;
    const minuteDegree = (minutes + seconds / 60) * 6;
    const secondDegree = seconds * 6;

    // Update hands
    document.querySelector('.hour').style.transform = `rotate(${hourDegree}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDegree}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondDegree}deg)`;
}

// Update clock immediately and every second
updateClock();
setInterval(updateClock, 1000);