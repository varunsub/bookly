import { Resolver, Query, Arg, UseMiddleware } from 'type-graphql';
import { Book } from '../entities/Book';
import { isAuth } from '../middleware/auth';
@Resolver(Book)
export class BookResolver {
	@Query(() => Book)
	@UseMiddleware(isAuth)
	async book(@Arg('id') id: string): Promise<Book | undefined> {
		try {
			return await Book.findOne(id);
		} catch (e) {
			return;
		}
	}
	@Query(() => [Book])
	async books(@Arg('limit') limit: number): Promise<Book[] | undefined> {
		try {
			return await Book.find({
				take: limit,
			});
		} catch (e) {
			return;
		}
	}
}
