const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req)
    console.log(req.url, req.method)

})

server.listen(3000, 'localhost', () => {
    console.log('server dinleniyor')
})