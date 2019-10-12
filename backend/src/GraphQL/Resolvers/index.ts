import { Device } from '../../entity/Device';
import { ResolverMap } from '../../Types/ResolverType';


const resolvers: ResolverMap = {
    Query: {
        hello: () => "hello World",
        DeviceList: async (_: any) => {

            const DeviceList = await Device.createQueryBuilder('device')
                .innerJoinAndMapOne('device.metering', 'Metering', 'metering', 'device.hwid = metering.hwid')
                .getMany();

            return DeviceList;
        },
    }
};

export default resolvers;