//importar o modulo nativo
const http = require('http')
const users = require('./mock/users')

//criar a instancia do server
const server = http.createServer((request, response)=>{

    console.log(`Request Method ${request.method} | Endpoint ${request.url}`)
    
    if(request.url === "/users" && request.method === "GET"){
        response.writeHead(200, {"Content-Type": 'application/json'})
        response.end(JSON.stringify(users))
    }else{
        //cabeçalho de resposta
        response.writeHead(200, {'Content-Type': 'text/html'})
        //finaliza a resposta
        response.end("<h2> Rota padrão </h2>")
    }
})

//subir o servidor
server.listen(3000, ()=> console.log('Servidor on-line na porta 3000'));