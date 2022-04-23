//obj prop shorthand

const name = 'Andrew'
const userAge = '32'

const user = {
    name,
    age: userAge,
    location: 'Med'
}

//obj desctructuring

const product = {
    label: 'notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, price, stock = 5} = product

//