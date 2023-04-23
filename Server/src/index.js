const  http = require('http');
const { characters } = require('./utils/data');

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if(url.includes(`/rickandmorty/character`)) {
        
    }
})
.listen(3001, 'localhost');