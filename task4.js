// Destructor
let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sinclare@april.biz',
    address: {
        street: 'Kulas Light',
        suit: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    },
    phone: '1-770-736-8031- x56442',
    website: 'hildegard.org'
}

// mengubah data dengan spread operator
data = {...data,name:"syarif",email:"syarif.khalid@gmail.com", hobby:"sepak bola"}
console.log(data)

// mengambil data street dan city
const {street, suit, city, zipcode} = data.address
console.log(street)
console.log(city)
