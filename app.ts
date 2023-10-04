import 'dotenv/config'
import express, { Response, NextFunction } from 'express';
import routes from './src/router/routes';
import https from 'https';
import fs from 'fs';

const app = express();

const server = https.createServer(
    {
        key: fs.readFileSync('/etc/letsencrypt/live/api-test.nerfic.fr/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/api-test.nerfic.fr/fullchain.pem'),
        ca: fs.readFileSync('/etc/nginx/ssl/client-cert.pem'),
        requestCert: false, // Activer la demande de certificat client
        rejectUnauthorized: false // Rejeter les connexions non autorisées (sans certificat client)
    },
    app
);

// Middleware pour gérer la vérification du certificat client
app.use((req: any, res: Response, next: NextFunction) => {
    if (!req.client.authorized) {
        return res.status(401).send('Certificat client invalide. Accès refusé.');
    }
    // Le certificat client est valide, continuez avec la gestion de la requête.
    next();
});

app.use(routes)

server.listen(process.env.SERVER_PORT, () => {
    console.log(`API CI/CD listening on port (MTLS) ${process.env.SERVER_PORT}!`)
})
