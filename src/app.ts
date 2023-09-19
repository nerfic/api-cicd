import 'dotenv/config'
import express from 'express';
import routes from './router/routes';

const app = express();

app.use(routes)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`API CI/CD listening on port ${process.env.SERVER_PORT}!`)
})
