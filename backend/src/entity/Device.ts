import {
    Entity,
    OneToOne,
    BaseEntity,
    JoinColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import { Metering } from "./Metering";


@Entity("device")
export class Device extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;

    @OneToOne(() => Metering)
    @JoinColumn({ name: "hwid" })
    hwid: Metering;
}