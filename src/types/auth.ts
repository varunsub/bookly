export type AWSResponse = {
	sub: string;
	aud: string;
	email_verified: boolean;
	event_id: string;
	token_use: string;
	auth_time: bigint;
	iss: string;
	exp: bigint;
	iat: bigint;
	email: string;
};
