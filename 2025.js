const arrow = document.getElementById('up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrow.style.display = '';
    } else {
        arrow.style.display = 'none';
    }
});

















const days = document.getElementById('365');
const hours = document.getElementById('23');
const minutes = document.getElementById('59');
const seconds = document.getElementById('60');

const currentYear = new Date().getFullYear();

const newYearTime = new Date('January 01 ${currentYear +1} 00:00:00');

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d < 10 ? '' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);