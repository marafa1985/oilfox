import { IFile, ISendStatus } from '../../Util/Types';
import { Client } from 'pg';

const client = new Client({
    user: "oilfox",
    password: "oilfox",
    port: 5432,
    database: "postgres"
})


const resolvers = {
    Query: {
        getAlldevice: (_: any, args: File) => { return true },
    },
    Mutation: {
        getDeviceInfo: async (_: any, { deviceID }: any) => {
            client.connect()
            client.query('SELECT * from device', (err, res) => {
                console.log(err ? err.stack : res.rows)
                client.end()
            });

            return true;
        }
    },
};

export default resolvers;