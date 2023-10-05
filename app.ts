import 'dotenv/config'
import express from 'express';
import routes from './src/router/routes';

const app = express();

app.use((req, res, next) => {
    console.log("New request on", req.originalUrl);
    next();
});

app.get('/', (req, res) => {
    res.send('API ON')
})

app.use(routes)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`API CI/CD listening on port ${process.env.SERVER_PORT}!`)
})
