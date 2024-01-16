import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerjson from './swagger.json' assert {type: 'json'};
import { customErrorHandler, errorHandlerMiddleware } from './src/errorHandler/errorHandler.js';

const server = express();

const port = 3700;

//? Swagger Middleware For API Doc Route

server.use('/apidoc', swagger.serve, swagger.setup(swaggerjson))





server.get("/test-custom-error", (req, res) => {
    throw new customErrorHandler(
        505,
        "testing app level custom error handling middleware"
    );
});

//? Defaule Route Definition
server.get('/', (req, res) => {
    throw new customErrorHandler(200, 'Postaway Application Home Page')
    // res.send('Postaway Application Home Page')
});

//? Error Handler and Logger Middleware setup

server.use(errorHandlerMiddleware);

// ? Listern Route Definition

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on Port ${port} `);
    }
})