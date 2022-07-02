import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements
NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		console.log("Hello, world. I am inside ValidateCustomerMiddleware.");
		const { authorization } = req.headers;
		if (authorization === undefined)
			return res
				.status(403)
				.send({ error: 'No Authentification Token Provided'});
		if (authorization === '123')
			next();
		else
			return res.status(403).send({ error: 'Invalid Authentification Token Provided'});
	}
}