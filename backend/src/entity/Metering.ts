import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn
} from "typeorm";


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