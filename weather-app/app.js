console.log('Starting')

// Asychnronous Example: When something runs in background and program continues
setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')