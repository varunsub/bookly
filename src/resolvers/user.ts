import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { validateUser } from '../utils/auth';
import { User as user } from '../entities/User';
import { getConnection } from 'typeorm';
import { Response } from 'express';
import { AWSResponse } from '../types/auth';
const jwt = require('jsonwebtoken');

require('dotenv').config();

@Resolver()
export class UserResolver {
	@Mutation(() => String)
	async register(
		@Arg('first') first: string,
		@Arg('last') last: string,
		@Arg('email') email: string,
		@Arg('awsSub') awsSub: string
	) {
		try {
			console.log('ran');
			const result = await getConnection()
				.createQueryBuilder()
				.insert()
				.into(user)
				.values({
					first: first,
					last: last,
					email: email,
					awsSub: awsSub,
				})
				.returning('*')
				.execute();
			console.log(result);
			console.log(result.raw[0]);
			return 'works';
		} catch (e) {
			console.log(e);
			return 'bye';
		}
	}
	@Mutation(() => Boolean)
	async login(@Arg('idToken') idToken: string, @Ctx('res') res: Response) {
		try {
			var resp: AWSResponse = await validateUser(idToken);
			let tok = await jwt.sign({ id: resp.sub }, process.env.AU_SECRET);
			res.cookie(`AUTH`, tok, {
				httpOnly: true,
				sameSite: 'strict',
				maxAge: (60 * 60 * 24 * 1000) / 2,
			});
			return true;
		} catch (e) {
			return false;
		}
	}
}
