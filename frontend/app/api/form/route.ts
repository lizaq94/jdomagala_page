import { NextRequest } from 'next/server';
import { IFormData } from '@/types/FormData';
import { transporter } from '@/config/nodemailer';
import { getEmailHTMLTemplate, getEmailTextTemplate } from '@/components/Form/template/emailTemplate';

export async function POST(req: NextRequest) {
	const body: IFormData = await req.json();
	const { name, email, phone, message } = body;

	try {
		const info = await transporter.sendMail({
			from: 'domagalaaaa.k94@gmail.com',
			to: 'domagala.k94@gmail.com',
			subject: 'Wiadomość ze strony jdomagala.pl',
			text: getEmailTextTemplate(name, email, phone, message),
			html: getEmailHTMLTemplate(name, email, phone, message),
		});
	} catch (error) {
		console.error(error);
	}

	return new Response('OK');
}
