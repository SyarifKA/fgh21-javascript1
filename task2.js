const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

// validasi kelengkapan nilai
if (mtk === undefined || mtk === null) {
    console.log('Nilai tidak lengkap!')
} else if (bahasaIndonesia === undefined || bahasaIndonesia === null) {
    console.log('Nilai tidak lengkap!')
} else if (bahasaInggris === undefined || bahasaInggris === null) {
    console.log('Nilai tidak lengkap!')
} else if (ipa === undefined || ipa === null) {
    console.log('Nilai tidak lengkap!')
} else {

    // mencari nilai Rata-rata
    let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

    console.log('Rata-rata = ' + rataRata)

    // mencari grade dari nilai Rata-rata
    if (rataRata >= 90 && rataRata <= 100) {
        console.log('Grade = A')
    } else if (rataRata >= 80 && rataRata < 90) {
        console.log('Grade = B')
    } else if (rataRata >= 70 && rataRata < 80) {
        console.log('Grade = C')
    } else if (rataRata >= 60 && rataRata < 70) {
        console.log('Grade = D')
    } else if (rataRata >= 0 && rataRata < 60) {
        console.log('Grade = E')
    }
}