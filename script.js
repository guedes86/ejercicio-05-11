let tentativas = 3

let senha = 7

var entrada = parseInt(prompt(`Advine el numero secreto en ${tentativas}  Tentativas`))

if (senha !== entrada && tentativas == 3){
    tentativas--
    var entrada = parseInt(prompt(`Por favor inserir otro valor - Tentativas : ${tentativas}`))
} if (senha !== entrada && tentativas == 2){
    tentativas--
    var entrada = parseInt(prompt(`Por favor inserir otro valor- Tentativas : ${tentativas}`))
} if (senha !== entrada && tentativas == 1){
    alert(`tentativas egostadas - O numero correcto es igual a ${senha}`)
} else {
    alert('acesso liberado')
}
