const http = require('http');

const server = http.createServer((res, req) => {
    console.log('istek geldi')
})

server.listen(3000, 'localhost', () => {
    console.log('server dinleniyor')
})