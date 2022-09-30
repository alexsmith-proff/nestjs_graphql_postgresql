import { UserEntity } from './../user/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('posts')
export class PostEntity {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    id: number
    
    @Field()
    @Column({ default: '' })
    title: string

    @Field()
    @Column({ default: '' })
    description: string

    @Field((type) => UserEntity)
    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity

    @Field()
    @CreateDateColumn()
    createdAt: Date

    @Field()
    @UpdateDateColumn()
    updatedAt: Date
}