import fs from "fs";
import https from 'https';
import http from 'http';
import { IEnvironment, Server, IConfig } from "./Types";


const InitServer = (app: any): Server => {
    const env: IEnvironment = {
        production: { ssl: true, port: 443, hostname: 'localhost' },
        development: { ssl: false, port: 4000, hostname: 'localhost' }
    }

    const config: IConfig = process.env.NODE_ENV ? env.development : env.production;
    let server = null;

    // Return HTTPS if the ENV is Prod
    if (config.ssl) {
        server = https.createServer(
            {
                key: fs.readFileSync(`./server.key`),
                cert: fs.readFileSync(`./server.crt`)
            },
            app
        )
    } else {
        server = http.createServer(app)
    }
    return { server: server, config: config }
}

export default InitServer;