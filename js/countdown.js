// AOS Initzilation
AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 1000,
});

// Tanggal jadwal gelombang
const reguler1 = new Date('Jul 24, 2021 00:00:00').getTime();
const reguler1End = new Date('Dec 31, 2021 24:00:00').getTime();
const reguler2 = new Date('Jan 1, 2022 00:00:00').getTime();
const reguler2End = new Date('Mar 29, 2022 24:00:00').getTime();
const reguler3 = new Date('Apr 1, 2022 00:00:00').getTime();
const reguler3End = new Date('Jun 29, 2022 24:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    if(now > reguler1 && now < reguler1End){
        countdown(now, reguler1End)
    } else if(now > reguler2 && now < reguler2End){
        countdown(now, reguler2End)
    } else if(now >= reguler3 && now <= reguler3End){
        countdown(now, reguler3End)
    } else {
        resetCountdown();
        console.log('error');
    }
}, 1000);

function countdown(now, endDate){
    const timeLeft = endDate - now;
    const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hour = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const min = Math.floor(timeLeft % (1000 * 60 * 60 ) / (1000 * 60));
    const sec = Math.floor(timeLeft % (1000 * 60 ) / 1000) ;
    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

function resetCountdown(){
    document.getElementById('day').innerHTML = '00';
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
}