import { Resolver, Query, Arg, UseMiddleware, Ctx } from 'type-graphql';
import { Like } from '../entities/Like';
import { isAuth } from '../middleware/auth';
import { getConnection } from 'typeorm';
import { Response } from 'express';
import { validateUser } from '../utils/auth';
import { AWSResponse } from '../types/auth';

@Resolver(Like)
export class LikeResolver {
	@Query(() => Like)
	@UseMiddleware(isAuth)
	async createLike(
		@Arg('bookid') bookid: number,
		@Arg('userid') userid: string,
		@Ctx('res') res: Response
	): Promise<String | undefined> {
		try {
			var resp: AWSResponse = await validateUser('sdfs');

			// const result = await getConnection()
			// 	.createQueryBuilder()
			// 	.insert()
			// 	.into(Like)
			// 	.values({
			// 		user:
			// 	})
			// 	.returning('*')
			// 	.execute();
			return 'await Like.findOne(bookid);';
		} catch (e) {
			return;
		}
	}
	@Query(() => Like)
	@UseMiddleware(isAuth)
	async getUsersLikes(@Arg('id') id: string): Promise<Like | undefined> {
		return await Like.findOne();
	}
}
