import { PostEntity } from './../post/post.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('my_user')
export class UserEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number
    
    @Field({description: "This is NAME"})
    @Column({ default: '' })
    name: string

    @Field()
    @Column({ default: '' })
    email?: string

    @Field((type) => [PostEntity])
    @OneToMany(() => PostEntity, post => post.user)
    posts: PostEntity[]

    @Field()
    @CreateDateColumn()
    createdAt: Date

    @Field()
    @UpdateDateColumn()
    updatedAt: Date
}