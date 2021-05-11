import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToMany,
	JoinColumn,
	Unique,
} from 'typeorm';
import 'reflect-metadata';

import { Field, ObjectType } from 'type-graphql';
import { Book } from './Book';
@Entity('Author')
@ObjectType()
@Unique(['olKey'])
export class Author extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column()
	name!: string;

	@Field(() => [Book])
	@ManyToMany(() => Book)
	@JoinColumn()
	books!: Book[];

	@Field()
	@Column()
	olKey!: string;

	@Field(() => String)
	@CreateDateColumn()
	createdAt = new Date();

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt = new Date();
}
