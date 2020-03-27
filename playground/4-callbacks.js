// Callback function - provide a function in a function to call later
setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)


const names = ['Ben', 'Jen', 'Lucy']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

// Callback pattern
const geoCode = (address, callback) => {
    
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        
        callback(data)
    }, 2000)
    
}

geoCode('Flint', (data) => {
    console.log(data)
})

