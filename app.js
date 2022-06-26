// OPTION B -----

const countdownB = () => {

    const input = '07/15/2022' // --> Configurer la date au format "MM/DD/YYYY".

    // détermine l'écart entre maintenant et la date configurée dans l'input.
    const now = new Date();
    const countDate = new Date(input).setHours(23, 59, 59, 0);
    const gap = countDate - now;

    // time details - option B
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // formate l'affichage des jours.
    const textDay = Math.floor(gap / day).toString().padStart(2, '0');
    const dayA = Array.from(textDay)[0];
    const dayB = Array.from(textDay)[1];

    // formate l'affichage des heures.
    const textHour = Math.floor((gap % day) / hour).toString().padStart(2, '0');
    const hourA = Array.from(textHour)[0];
    const hourB = Array.from(textHour)[1];

    // formate l'affichage des minutes.
    const textMinute = Math.floor((gap % hour) / minute).toString().padStart(2, '0');
    const minuteA = Array.from(textMinute)[0];
    const minuteB = Array.from(textMinute)[1];

    // formate l'affichage des secondes.
    const textSecond = Math.floor((gap % minute) / second).toString().padStart(2, '0');
    const secondA = Array.from(textSecond)[0];
    const secondB = Array.from(textSecond)[1];

    // affiche les jours dans les time-boxes.
    document.querySelector('.day-a').innerHTML = dayA;
    document.querySelector('.day-b').innerHTML = dayB;

    // affiche les heures dans les time-boxes.
    document.querySelector('.hour-a').innerHTML = hourA;
    document.querySelector('.hour-b').innerHTML = hourB;

    // affiche les minutes dans les time-boxes.
    document.querySelector('.minute-a').innerHTML = minuteA;
    document.querySelector('.minute-b').innerHTML = minuteB;

    // affiche les secondes dans les time-boxes.
    document.querySelector('.second-a').innerHTML = secondA;
    document.querySelector('.second-b').innerHTML = secondB;

    if (second < 0) {
        clearInterval(noDelay); // annule la seconde d'intervale au chargement de la page.
    }

}

countdownB();
const noDelay = setInterval(countdownB, 1000);
