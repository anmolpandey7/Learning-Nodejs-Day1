const http = require('http')
const url = require('url')

http.createServer((req , resp)=>{
    console.log(req.url);

    const obj = url.parse(req.url);
    console.log(obj)
}).listen(8282)