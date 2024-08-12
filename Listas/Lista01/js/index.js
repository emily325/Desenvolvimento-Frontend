const express = require('express')
const app = express()
const porta = 5000

let produtos = [
   {
    nome: "Bolu de murangu",
    valor: 1000,
    descricao: "Hummm bolo de murangu, melhor bolo do mundo",
    imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stampartz.com.br%2Fcamiseta-pica-pau-bolo-de-murango&psig=AOvVaw2SS-Xbuq7SoUMDfYOomoTU&ust=1723497188131000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjNwMLt7YcDFQAAAAAdAAAAABAQ"
   },
   {
    nome: "Bolo de chocolate",
    valor: 200,
    descricao: "Hummm bolo bom D+++",
    imagem: "https://www.google.com/imgres?q=bolo%20de%20chocolate&imgurl=https%3A%2F%2Fstatic.itdg.com.br%2Fimages%2F360-240%2F5df1a91c8a4ea09243af6822b9970314%2F318292-original.jpg&imgrefurl=https%3A%2F%2Fwww.tudogostoso.com.br%2Freceita%2F62547-a-melhor-receita-de-bolo-de-chocolate.html&docid=RdwtrDx285ymmM&tbnid=hUn6ikrk4oHWpM&vet=12ahUKEwjFyqmZ7u2HAxUBqZUCHZqRPQoQM3oECBsQAA..i&w=360&h=240&hcb=2&ved=2ahUKEwjFyqmZ7u2HAxUBqZUCHZqRPQoQM3oECBsQAA"
   },
   {
    nome: "Bolo de cenoura",
    valor: 300,
    descricao: "Hmmm bolo top",
    imagem:"https://www.google.com/imgres?q=bolo%20de%20cenoura&imgurl=https%3A%2F%2Fwww.receitasdechef.com.br%2Fviews%2Fassets%2Fimg%2Fpostagens%2F2024%2F06%2Fbolo-de-cenoura-com-cobertura-de-chocolate-1718996790.html.jpeg&imgrefurl=https%3A%2F%2Fwww.receitasdechef.com.br%2Freceita%2Fbolo-de-cenoura-com-cobertura-de-chocolate-1718996790.html&docid=gZUlUN4YqLvTZM&tbnid=i88EOkAsTf-DJM&vet=12ahUKEwjk7b3j7u2HAxVEr5UCHTNrFckQM3oECHUQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjk7b3j7u2HAxVEr5UCHTNrFckQM3oECHUQAA"
   }
]

app.get('/', (requisicao, resposta) =>{
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "operacao invalida"}).status(400)
    }
})


app.get('/produto', (requisicao, resposta) => {
    let queryUrl = requisicao.query
    return resposta.json(queryUrl).status(200)
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})