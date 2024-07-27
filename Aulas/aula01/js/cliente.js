 let conteudoDIV = document.getElementById('conteudo')

 fetch('http://localHost:5000')
    .then(resposta => resposta.json())
    .then(dados => {
        let paragrafo = document.createElement('p')
        paragrafo.textContent = dado.nome
        conteudoDIV.appendChild(paragrafo)
    })
