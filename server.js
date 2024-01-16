import express from 'express';

const server = express();

const port = 3700;

//? Defaule Route Definition
server.get('/', (req, res) => {
    res.send('Postaway Application Home Page')
});

// ? Listern Route Definition

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on Port ${port} `);
    }
})