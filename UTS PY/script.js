function pilih(pilihan) {
    document.getElementById('hasil').innerText = '';
    document.getElementById('pilihan-container').setAttribute('data-pilihan', pilihan);
}

function pilihanKomputer() {
    var pilihan = ['gunting', 'batu', 'kertas'];
    return pilihan[Math.floor(Math.random() * pilihan.length)];
}

function menang(pilihanPemain, pilihanKomputer) {
    if ((pilihanPemain == 'gunting' && pilihanKomputer == 'kertas') ||
        (pilihanPemain == 'batu' && pilihanKomputer == 'gunting') ||
        (pilihanPemain == 'kertas' && pilihanKomputer == 'batu')) {
        return true;
    }
    return false;
}

function mainkan() {
    var pilihanPemain = document.getElementById('pilihan-container').getAttribute('data-pilihan');
    var pilihanKomputer = pilihanKomputer();

    var hasil = '';
    if (pilihanPemain && pilihanKomputer) {
        if (menang(pilihanPemain, pilihanKomputer)) {
            hasil = 'Kamu menang!';
        } else if (pilihanPemain == pilihanKomputer) {
            hasil = 'Seri!';
        } else {
            hasil = 'Kamu kalah!';
        }
    } else {
        hasil = 'Pilih salah satu!';
    }

    document.getElementById('hasil').innerText = hasil;
}
