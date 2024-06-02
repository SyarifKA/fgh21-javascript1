const mataPel = [
    mtk = 90,
    bIndonesia = 90,
    bInggris = 60,
    ipa = 80
]

// validasi apakah nilai yang diinput sudah semua
if (mataPel.length < 4) {
    return console.log('Nilai Anda tidak lengkap!')
}

// mencari nilai total
let i = 0
let total = 0

while (mataPel.length > i) {
    total += mataPel[i]
    i++
}

// mencari nilai Rata-rata
let rataRata = total / mataPel.length

// menampilkan nilai Rata-rata
console.log('Rata-rata = '+rataRata)

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