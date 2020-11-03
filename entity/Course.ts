import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Course {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    date!: string
}
