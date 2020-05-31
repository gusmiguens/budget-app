const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data')
        reject('This is my rejection')
    }, 2000)
    
})

console.log('beofre')

promise.then((data) => {
    console.log(data)
}).then(() => {
    console.log('does this run?')
})
.catch(e => {
    console.log('this is my error: ' + e)
})

console.log('after')