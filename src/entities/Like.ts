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
import { GraphQLJSONObject } from 'graphql-type-json';
import { Field, ObjectType } from 'type-graphql';
import { Author } from './Author';
// @Entity('book')
// @ObjectType()
// @Unique(['olKey'])
// export class Book extends BaseEntity {
// 	@Field()
// 	@PrimaryGeneratedColumn('uuid')
// 	id!: string;

// 	@Field()
// 	@Column()
// 	title!: string;

// 	@Field({ nullable: true })
// 	@Column('text', { nullable: true })
// 	olCoverEditionKey!: string;

// 	@Field()
// 	@Column()
// 	olLendingEdition!: string;

// 	@Field()
// 	@Column()
// 	olKey!: string;

// 	@Field(() => [Author])
// 	@ManyToMany(() => Author)
// 	@JoinColumn()
// 	authors!: Author[];

// 	@Field({ nullable: true })
// 	@Column('text', { nullable: true })
// 	isbn!: string;

// 	@Field()
// 	@Column()
// 	subject!: string;

// 	@Field(() => String)
// 	@CreateDateColumn()
// 	createdAt = new Date();

// 	@Field(() => String)
// 	@UpdateDateColumn()
// 	updatedAt = new Date();
// }

// class jsonb {
// 	title = String;
// 	covers = [String];
// 	key = String;
// 	authors = [String];
// }

// @Entity('book')
// @ObjectType()
// export class Book extends BaseEntity {
// 	@Field()
// 	@PrimaryGeneratedColumn('uuid')
// 	id!: string;

// 	@Field()
// 	@Column()
// 	type!: string;

// 	@Field({ nullable: true })
// 	@Column('text', { nullable: true })
// 	key!: string;

// 	@Field()
// 	@Column()
// 	revision!: string;

// 	@Field()
// 	@Column()
// 	last_modified!: string;

// 	@Field(() => GraphQLJSONObject)
// 	@Column('jsonb')
// 	json_bin!: typeof GraphQLJSONObject;
// }

@Entity('book')
@ObjectType()
export class Like extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: string;

	@Field()
	@Column()
	book!: string;

	@Field({ nullable: true })
	@Column()
	user!: string;
}
