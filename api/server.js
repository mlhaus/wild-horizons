import http from 'node:http'
import { getDataFromDB } from '../database/db.js'
import { sendJSONResponse } from '../utils/sendJSONResponse.js'
import { getDataByPathParams } from '../utils/getDataByPathParams.js'
import { jsFrameworks } from '../data/jsFrameworks.js'
const PORT = 8000

const animal = {
    type: 'elephant',
    nickName: 'Elon Tusk'
}

console.log(typeof JSON.stringify(animal))


const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    // localhost:8000/api works, localhost:8000/api/ does not
    if (req.url === '/api' && req.method === 'GET') {

        sendJSONResponse(res, 200, destinations)

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

        const continent = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations, 'continent', continent)
        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith('/api/country') && req.method === 'GET') {

        const country = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations, 'country', country)
        sendJSONResponse(res, 200, filteredData)

    }

    else {

        res.setHeader('Content-Type', 'application/json')
        sendJSONResponse(res, 404, ({
            error: "not found",
            message: "The requested route does not exist"
        }))

    }
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))

// The Network Tool and Related Projects
// https://scrimba.com/s05e8338en