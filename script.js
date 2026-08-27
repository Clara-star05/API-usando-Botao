function apertou1(){
    console.log('apertou')

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image
        document.getElementById('nome').innerHTML = corpo.name
         document.getElementById('botao').innerHTML = corpo.button
    })
}

function apertou2(){
    console.log('apertou2')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image2
        document.getElementById('nome').innerHTML = corpo.name2
        document.getElementById('botao2').innerHTML = corpo.button2
    

    })
}

function apertou3(){
    console.log('apertou3')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image3
        document.getElementById('nome').innerHTML = corpo.name3    
        document.getElementById('botao3').innerHTML = corpo.button3
    })
}
function apertou4(){
    console.log('apertou4')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image4
        document.getElementById('nome').innerHTML = corpo.name4    
        document.getElementById('botao4').innerHTML = corpo.button4
    })
}
function apertou5(){
    console.log('apertou5')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image5
        document.getElementById('nome').innerHTML = corpo.name5    
        document.getElementById('botao5').innerHTML = corpo.button5
    })
}