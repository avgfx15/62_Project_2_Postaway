import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerjson from './swagger.json' assert {type: 'json'};
import { customErrorHandler, errorHandlerMiddleware } from './src/errorHandler/errorHandler.js';
import userRouter from './src/features/users/userRoutes/userRoutes.js';
import postRouter from './src/features/posts/postRoutes/postRoutes.js';
import commentRouter from './src/features/comments/commentRoutes/commentRoutes.js';

const server = express();

const port = 3700;

//// Middleware to received JSON request

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//? Swagger Middleware For API Doc Route

server.use('/apidoc', swagger.serve, swagger.setup(swaggerjson))

//// User Related Routes
server.use('/api', userRouter)

//// Post Related Routes
server.use('/api/posts', postRouter)

//// Comment Related Routes
server.use('/api/comments', commentRouter);




//? Defaule Route Definition
server.get('/', (req, res) => {
    // throw new customErrorHandler(200, 'Postaway Application Home Page')
    return res.send('Postaway Application Home Page');
});

//? Error Handler and Logger Middleware setup

server.use(errorHandlerMiddleware);

// ? Page Not Found Or Invalid url request

server.use((req, res) => {
    return res.status(400).send('Page not found or invalid url request, for more details please visit - http://localhost:3700/apidoc')
})

// ? Listern Route Definition

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on Port ${port} `);
    }
})