function isPrime(arg){ 
    if (arg === 1){return false}
    let num = []
    for (let i = 1; i < 10; i++){
        if (arg % i === 0){
            num.push(i)
        }
    }
    if (num.length > 2){
        return false
    }
    else{
        return true
    }
} 

module.exports = {isPrime}