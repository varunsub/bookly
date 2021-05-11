import { Field, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Timestamp,
} from 'typeorm';

@Entity('User')
@ObjectType()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column()
	first!: string;

	@Field()
	@Column()
	last!: string;

	@Field()
	@Column()
	email!: string;

	@Field({ nullable: true })
	@Column('text', { nullable: true })
	awsSub?: string;

	@Field(() => String)
	@CreateDateColumn({ type: 'timestamptz' })
	createdAt = new Date();

	@Field(() => String)
	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt = new Date();
}
