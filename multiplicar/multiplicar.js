const fs = require('fs')

const crearArchivo = (base) =>{
    return new Promise((resolve, reject) =>{
        if(isNaN(base)){
            reject('[ERROR] - El valor introducido no es un numero')
        }

        let data = ''

        for(let i = 1; i <= 10; i++){
            data += (`${base} * ${i} = ` + (base * i) + '\n');
        }

        fs.writeFile(`./tablas/multiplos-${base}.txt`, data ,(err) =>{
            if(err){
                reject(err)
            } else{
                resolve(`multiplos-${base}.txt`)
            }
        })
    })
}

module.exports = crearArchivo