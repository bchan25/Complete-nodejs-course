// Callback function - provide a function in a function to call later
setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)


const names = ['Ben', 'Jen', 'Lucy']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }

    return data
}

const data = geoCode('Flint')
console.log(data)