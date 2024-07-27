const http = require('http')
const port = 5000

const produtos = [
    {nome: 'bolu de murangu', valor: 1000000, imagem: 'https://www.google.com/imgres?q=pica%20pua%20bolo%20de%20murangu&imgurl=https%3A%2F%2Fcdn.awsli.com.br%2F1597%2F1597404%2Fproduto%2F150814515%2F01e778c47e.jpg&imgrefurl=https%3A%2F%2Fwww.stampartz.com.br%2Fcamiseta-pica-pau-bolo-de-murango&docid=q6JeSyLW_QQrOM&tbnid=ULk6UVBN7O_XSM&vet=12ahUKEwjHzbXwrseHAxVyJrkGHV3pKyAQM3oECBEQAA..i&w=850&h=850&hcb=2&ved=2ahUKEwjHzbXwrseHAxVyJrkGHV3pKyAQM3oECBEQAA'},
    {nome: 'bolo de chocolate', valor: 300},
]
const requestHandler = (req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.write(JSON.stringify(produtos))
    return res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('Servidor rodando na port 5000')
})