console.log('utils.js');

const name = 'Chris';

const add = (a, b) => {
    return a + b;
}

// Export for other files to use
module.exports = add;