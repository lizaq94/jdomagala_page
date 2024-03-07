import nodemailer from 'nodemailer';
const service = process.env.NODMAILER_SERVICE;
const user = process.env.NODMAILER_USER;
const pass = process.env.NODMAILER_PASS;
export const transporter = nodemailer.createTransport({
	service,
	auth: {
		user,
		pass,
	},
});
