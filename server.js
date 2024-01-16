import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerjson from './swagger.json' assert {type: 'json'};

const server = express();

const port = 3700;

//? Swagger Middleware For API Doc Route

server.use('/apidoc', swagger.serve, swagger.setup(swaggerjson))






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