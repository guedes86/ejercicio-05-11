let tentativas = 3

let senha = 7

var entrada = parseInt(prompt(`Advine el numero secreto en ${tentativas}  Tentativas`))

while (entrada !== senha ){
    tentativas--
    switch(true){
        case (tentativas > 0):
            entrada = parseInt(prompt(`Advine el numero secreto en ${tentativas}  Tentativas`))
            break
        case (tentativas === 0):
            alert(`tentativas egostadas - O numero correcto es igual a ${senha}`)
            break
    }
}

alert(`Felicitaciones acertaste el valor correcto  ${senha}`)