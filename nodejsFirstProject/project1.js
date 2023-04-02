const url = require('url')
const http = require('http')
const fs = require('fs')


http.createServer((req,resp)=>{
    //request//
    //index
    //about
    //services

    const path = req.url;
    if(path =="/about"){
        console.log("about page")
        resp.writeHead(200,{"content-type":"text/html"})

        const fileContent = fs.readFileSync('./views/about.html')
        resp.write(fileContent)
        resp.end();
    }
    if(path == "/"){
        console.log("Home page")
        resp.writeHead(200,{"content-type":"text/html"})

        const fileContent = fs.readFileSync('./views/home.html')
        resp.write(fileContent)
        resp.end();
    }
    if(path =="/services"){
        console.log("Services")
        resp.writeHead(200,{"content-type":"text/html"})

        const fileContent = fs.readFileSync('./views/services.html')
        resp.write(fileContent)
        resp.end();
    }
}).listen(9898);