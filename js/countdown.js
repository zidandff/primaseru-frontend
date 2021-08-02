// AOS Initzilation
AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 1000,
});

// Tanggal jadwal gelombang
const reguler1 = new Date('Aug 1, 2021 00:00:00').getTime();
const reguler1End = new Date('Dec 31, 2021 24:00:00').getTime();
const reguler2 = new Date('Jan 1, 2022 00:00:00').getTime();
const reguler2End = new Date('Mar 31, 2022 24:00:00').getTime();
const reguler3 = new Date('Apr 1, 2022 00:00:00').getTime();
const reguler3End = new Date('Jun 30, 2022 24:00:00').getTime();
const reguler3Plus = new Date('Jul 1, 2022 00:00:00').getTime();
const reguler3PlusEnd = new Date('Jul 31, 2022 24:00:00').getTime();

const cdTitle = document.getElementById('cd-title');
const strReguler1 = "Jalur Prestasi & Reguler 1 <br> Sedang Dibuka Sampai"
const strReguler2 = "Reguler 2 Sedang Dibuka sampai"
const strReguler3 = "Reguler 3 Sedang Dibuka sampai"
const strReguler3Plus = "Reguler 3+ Sedang Dibuka sampai"

const countDownJadwal = setInterval(() => {
    const now = new Date().getTime();
    if(now > reguler1 && now < reguler1End){
        countdown(now, reguler1End)

        // cek apakah title countdown sudah dirubah
        if( cdTitle.innerHTML != strReguler1){
            cdTitle.innerHTML = strReguler1;
        }
        
    } else if(now > reguler2 && now < reguler2End){
        countdown(now, reguler2End)

        // cek apakah title countdown sudah dirubah
        if( cdTitle.innerHTML != strReguler2){
            cdTitle.innerHTML = strReguler2;
        }

    } else if(now >= reguler3 && now <= reguler3End){
        countdown(now, reguler3End)

        // cek apakah title countdown sudah dirubah
        if( cdTitle.innerHTML != strReguler3){
            cdTitle.innerHTML = strReguler3;
        }

    } else if(now >= reguler3Plus && now <= reguler3PlusEnd){
        countdown(now, reguler3Plus)

        // cek apakah title countdown sudah dirubah
        if( cdTitle.innerHTML != strReguler3Plus){
            cdTitle.innerHTML = strReguler3Plus;
        }

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