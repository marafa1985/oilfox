import http from 'http';

type TServer = http.Server;

export interface IFile {
    file: string
}

export interface ISendStatus {
    state: boolean,
    message?: string
}

export interface IConfig {
    ssl: boolean,
    port: number,
    hostname: string
}
export interface IEnvironment {
    production: IConfig,
    development: IConfig
}
export interface Server {
    server: TServer,
    config: IConfig
}