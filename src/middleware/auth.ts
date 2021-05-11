import { MiddlewareFn } from 'type-graphql';
import { Request } from 'express';
export const isAuth: MiddlewareFn<XContext> = ({ context }, next) => {
	console.log(context.req.headers);
	if (!context.req) throw new Error('not authenticated');
	return next();
};

export type XContext = {
	req: Request;
	res: Response;
};
