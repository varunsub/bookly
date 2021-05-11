import { Resolver, Query } from 'type-graphql';
import { Author } from '../entities/Author';

@Resolver()
export class AuthorResolver {
	@Query(() => Author)
	author() {
		return 'test';
	}
}
