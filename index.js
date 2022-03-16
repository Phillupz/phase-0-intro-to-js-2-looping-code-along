

function writeCards(names, surprise) {
    let newNames = []

    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }

return newNames;

}
let n = 10
function countDown(n) {
    while (n >= 0){ 
        console.log(n--)
    }
return n
}