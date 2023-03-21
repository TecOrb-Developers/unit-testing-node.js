// app.ts
import express, { NextFunction, Request, Response } from 'express';
const app = express();
const cors = require("cors")
const port = 3005;

import apiRouter from './routes/index';
app.use('/api/v1', apiRouter);

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    // app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    // app.use(helmet());
}
app.use(cors());
app.get('/', (req, res) => {
    res.json('Mocha and Chai project under development');
});
app.get('/message', (req, res) => {
    res.json('This url give the message');
});
var server = app.listen(port, () => {
    console.log('Mocha and Chai project server is running on development port ' + port);
})
export default app;
