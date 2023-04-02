const http = require('http')

const server = http.createServer((req,resp)=>{
    resp.writeHead(200, {"content-type":"this is an Html/text"})
    resp.write("<h1> wow this is very good </h1>")
    resp.write("<h1>nice things are going </h1>")
    resp.write("<button>Click me</button>")
    resp.end("ok bye bye")
})

server.listen(8989)