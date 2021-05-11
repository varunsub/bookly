import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { BookResolver } from './resolvers/book';
import { UserResolver } from './resolvers/user';
import { LikeResolver } from './resolvers/like';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { Request, Response } from 'express';
import { Connection, createConnection } from 'typeorm';
import { User } from './entities/User';
import { Book } from './entities/Book';
import { Author } from './entities/Author';

import { AuthorResolver } from './resolvers/author';

require('dotenv').config();

const main = async () => {
	const app = express();
	const conn: Connection = await createConnection({
		type: 'postgres',
		url: process.env.DATABASE_URL,
		logging: true,
		// synchronize: true,
		migrations: [path.join(__dirname, './migrations/*')],
		entities: [User, Book, Author],
	});
	app.set('trust proxy', 1);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(function (_: Request, res: Response, next) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
		res.setHeader(
			'Access-Control-Allow-Methods',
			'GET, POST, OPTIONS, PUT, PATCH, DELETE'
		);
		res.setHeader(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept, Authorization, '
		);
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		return next();
	});
	app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [BookResolver, UserResolver, AuthorResolver, LikeResolver],
			validate: false,
		}),
		context: ({ req, res }) => {
			const auth = req.headers.authorization || '';
			return {
				auth,
				req,
				res,
			};
		},
	});
	// app.post('/sendAwsCreds', function (req, res, next) {
	// 	res.status(200).json({ results: 'test' });
	// 	return next();
	// });
	server.applyMiddleware({
		app,
		cors: {
			origin: true,
			allowedHeaders: [
				'Authorization',
				'Content-Type',
				'apollographql-client-name',
				'Access-Control-Allow-Credentials',
			],
		},
	});
	app.listen(parseInt('4000'), () => {
		console.log('server started on localhost:4000' + `${server.graphqlPath}`);
	});
};
main().catch((e) => console.log(e));
