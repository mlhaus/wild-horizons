import http from 'node:http'
import { data } from '../data/data.js'
import { jsFrameworks } from '../data/jsFrameworks.js'
const PORT = 8000

const server = http.createServer((req, res) => {
    // res.end('Hello from the server!')
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(jsFrameworks))
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))