function info() {
    let meses = new Array ( 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', ' Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    let agora = new Date 
    let saida = document.getElementById('saída')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getDay()
    let min = agora.getMinutes()
let seg = agora.setSeconds()
saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
saida.innerHTML  += `<p>Dia: <mark>${meses[mes]}</mark></p>`
saida.innerHTML += `<p>Dia: <mark>${ano}</mark></p>`
saida.innerHTML += `<p>Dia: <mark>${dsemana[sem]}</mark></p>`

saida.innerHTML = `<p>Dia: <mark>${hora}</mark></p>`
saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`

}