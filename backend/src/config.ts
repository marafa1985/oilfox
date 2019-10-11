import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Device } from './entity/Device';
import { Metering } from './entity/Metering';

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "oilfox",
    password: "oilfox",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: [
        Device,
        Metering
    ]
};

export { typeOrmConfig };