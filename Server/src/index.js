const  http = require('http');
const data = require('./utils/data');

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;
    console.log(url);

    if(url.includes('/rickandmorty/character')) {

        const id = url.split('/').at(-1)
        
        const characterFound = data.find((character) => character.id === +id)

        return res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFound))
    } 
}) 
.listen(3002, 'localhost');