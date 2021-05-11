import { AWSResponse } from 'src/types/auth';

require('dotenv').config();
const CognitoExpress = require('cognito-express');
const util = require('util');

const cognitoExpress = new CognitoExpress({
	region: 'us-west-2',
	cognitoUserPoolId: process.env.AWS_POOL_ID,
	tokenUse: 'id', //Possible Values: access | id
	tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
});

const validateUser = async (token: string): Promise<AWSResponse> => {
	return new Promise((resolve, reject) => {
		cognitoExpress.validate(token, function (err: any, response: any) {
			if (!response) return reject(err);
			else return resolve(response as AWSResponse);
		});
	});
};

export { validateUser };
