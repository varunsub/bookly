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
export class Book extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column('text', { nullable: true })
	name!: string;

	@Field({ nullable: true })
	@Column('text', { nullable: true })
	rd1!: string;

	@Field()
	@Column('int4', { nullable: true })
	numPages!: number;

	@Field()
	@Column('text', { nullable: true })
	rd4!: string;

	@Field()
	@Column('text', { nullable: true })
	rdTotal!: string;

	@Field()
	@Column('int4', { nullable: true })
	publishMonth!: number;

	@Field()
	@Column('int4', { nullable: true })
	publishDay!: number;

	@Field()
	@Column('text', { nullable: true })
	publisher!: string;

	@Field()
	@Column('int4', { nullable: true })
	numReviews!: number;

	@Field()
	@Column('int4', { nullable: true })
	publishYear!: number;

	@Field()
	@Column('text', { nullable: true })
	language!: string;

	@Field()
	@Column('text', { nullable: true })
	authors!: string;

	@Field()
	@Column('float8', { nullable: true })
	rating!: number;

	@Field()
	@Column('text', { nullable: true })
	rd2!: string;

	@Field()
	@Column('text', { nullable: true })
	rd5!: string;

	@Field()
	@Column('text', { nullable: true })
	ISBN!: string;

	@Field()
	@Column('text', { nullable: true })
	rd3!: string;
}
