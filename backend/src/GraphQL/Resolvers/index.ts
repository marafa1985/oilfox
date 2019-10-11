import { IFile, ISendStatus } from '../../Util/Types';
import { Client } from 'pg';
import { Device } from '../../entity/Device';
import { createConnection } from 'typeorm';
import { typeOrmConfig } from '../../config';
import { Metering } from '../../entity/Metering'
import { ResolverMap } from '../../Types/ResolverType';


const resolvers: ResolverMap = {
    Query: {
        getAlldevice: async (_: any) => {

            const allDevices = await Device.createQueryBuilder('device')
                .innerJoinAndMapOne('device.hwid', 'Metering', 'metering', 'device.hwid = metering.hwid')
                .getMany();
            return allDevices;
        },
    }
};

export default resolvers;