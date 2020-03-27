// Object property shorthand

const name = 'Ben';
const userAge = 32;

const user = {
    name,
    age: userAge,
    location: 'Chester'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { label:productLabel, stock, rating = 5 } = product
console.log(productLabel)
console.log(stock)
console.log(rating)