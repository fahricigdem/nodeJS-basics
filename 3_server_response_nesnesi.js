const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html')
    res.write('<head><title>NodeJs Dersleri</title></head>')
    //res.write('<!DOCTYPE html>    <html lang="en">    <head>        <meta charset="UTF-8">        <meta http-equiv="X-UA-Compatible" content="IE=edge">        <meta name="viewport" content="width=device-width, initial-scale=1.0">        <title>NodeJs Dersleri</title>    </head>    <body>        <h1 style="color:red">Ana Sayfa</h1>    </body>    </html>')
    res.write('<h1>merhaba</h1>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('server dinleniyor')
})