import http from 'node:http'
import { data } from '../data/data.js'
import { jsFrameworks } from '../data/jsFrameworks.js'
const PORT = 8000

const animal = {
    type: 'elephant',
    nickName: 'Elon Tusk'
}

console.log(typeof JSON.stringify(animal))


const server = http.createServer((req, res) => {

    if (req.url === '/api' && req.method === 'GET') {
        res.end('This is from the server')
    }

})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))

// The Network Tool and Related Projects
// https://scrimba.com/s05e8338en