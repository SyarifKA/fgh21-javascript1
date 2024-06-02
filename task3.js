let printSegitiga = 0
let nomor = 1

for (let i = 1; i <= 5; i++){
    for (let j = 5; j >= i; j--){
        printSegitiga = printSegitiga * 10 + nomor
        nomor++
    }   
    console.log(printSegitiga) 
    printSegitiga = 0
    nomor = 1
}