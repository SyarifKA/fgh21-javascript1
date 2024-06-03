const printSegitiga = 5

if (typeof printSegitiga === 'number') {
    for (let numAwal = printSegitiga; numAwal > 0; numAwal--){
        let text = ''
        for (i = 1; i<= numAwal; i++){
            text = text + i 
        }
        console.log(text)
    } 
}else {
    console.log('Data harus number')
}