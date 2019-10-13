# Device details view

# Database
run database with `docker-compose up`

credentials are:
* user `oilfox`
* password `oilfox`
* database `postgres`
* host (inside docker) `db`
* port `5432`

# Task

This Task was provided by OilFox, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [NodeJS](https://nodejs.org).

The application developed by [TypeScript](https://www.typescriptlang.org/index.html) with React.
The goal of the application is to allow client to get the infromation from hardware device, incuding (metering value and battery charge) from backend using [Apollo Client](https://www.apollographql.com/docs/react/api/react-hooks/#usemutation).

Based on that requirement, we need to create two, frontend to query the device status, and also get all available devices, and backend which feedback the query from database.

# Backend

The application developed by [TypeScript](https://www.typescriptlang.org/index.html) with Nodejs, and Implement [Apollo Server](https://www.apollographql.com/docs/apollo-server/), and also uses [TypeORM](https://typeorm.io) to communicate with database.

## TypeORM:

The backend project uses `.env` file to configure the connection to Database:
```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=oilfox
TYPEORM_PASSWORD=oilfox
TYPEORM_DATABASE=postgres
TYPEORM_PORT=5432
TYPEORM_SYNCHRONIZE=false
TYPEORM_LOGGING=false
TYPEORM_ENTITIES=src/entity/**/*.ts
```
Since we get the devices and it last metering value so, there are two entities must be added:

- Device
```
@Entity("device")
export class Device extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;

    @OneToOne(() => Metering)
    @JoinColumn({ name: "hwid" })
    metering: Metering;
}
```
- Metering
```
@Entity("metering")
export class Metering extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id!: string;

    @Column({ type: "varchar" }) 
    hwid: string;

    @Column({ nullable: true, type: "real" }) 
    value!: number;

    @Column({ nullable: true, type: "real" }) 
    battery!: number;
}
```

## Apollo Server (GraphQL)

### DeviceList (resolvers)

DeviceList is The query requied to complete this task and also there may be more, as the project was structured to accept more improvement:

- Returns all devices including there last metering values, and the battery status

```
 DeviceList: async (_: any) => {

            const DeviceList = await Device.createQueryBuilder('device')
                .innerJoinAndMapOne('device.metering', 'Metering', 'metering', 'device.hwid = metering.hwid')
                .getMany();

            return DeviceList;
        }
```
### Type Definition (Schema)
```
type Metering {
  id: String!
  hwid: String!
  value: Float!
  battery: Float!
}
type Device {
  id: String!
  metering: Metering!
}
type Query {
  DeviceList: [Device!]!
}
```

# Frontend

The application developed by [TypeScript](https://www.typescriptlang.org/index.html) with React, and also uses [SemanticUI](https://react.semantic-ui.com/), and [Apollo Client](https://www.apollographql.com/docs/react/api/react-hooks/#usemutation) for backend queries.

## Views:

### Devices:

Uses the `@apollo/react-hooks`, to get all devices available from backend.

## Components

### DeviceList:

A component that accept passed devices from Devices View, do the following:

- set default devices `device: this.props.data[0]`

- render DeviceTable Component to show the user all available drives, also you can click "Details button" to get the device information.

- pass selected device to DeviceInfo Component

### DeviceInfo:

it a side Menu that display the device information.

# Test

`npm run test`

## e2e

For e2e Testing you can install [cypress.io](https://www.cypress.io/).

How to use cypress it [https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)

# Ambiguity

No ambiguity

# Deploy
To start the project type the following command to you command line

`docker-compose up -d`

After the command finished installation, you can open browser and goto url:

[http://localhost:3000/](http://localhost:3000/)

