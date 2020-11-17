const listarArchivo = (base, limite) =>{
    return new Promise((resolve, reject) =>{
        if(isNaN(base)){
            reject(console.log(`[ERROR] - "${base}" no es un numero`.underline.red))
        } else if(isNaN(limite)){
            reject(console.log(`[ERROR] - "${limite}" no es un numero`.underline.red))
        }
        console.log(`\nListando tabla con base ${base} y limite ${limite}\n`.green.bold);
        for(let i = 1; i <= limite; i++){
            console.log(`${base} * ${i} = ${base * i}`);
        } 
    })
}
module.exports = listarArchivo