import http from 'node:http'
import { data } from '../data/data.js'
import { jsFrameworks } from '../data/jsFrameworks.js'
const PORT = 8000

const server = http.createServer( (req, res)=> {
    res.write('This is some data \n')
    res.write('This is some more data \n')
    res.end('This is from the server', 'utf8', ()=> console.log('response end'))
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))

// The Network Tool and Related Projects
// https://scrimba.com/s05e8338en