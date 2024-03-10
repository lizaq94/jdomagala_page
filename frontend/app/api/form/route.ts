import { NextRequest } from 'next/server';
import { IFormData } from '@/types/FormData';
import { transporter } from '@/config/nodemailer';
import { getEmailHTMLTemplate, getEmailTextTemplate } from '@/components/Form/template/emailTemplate';

export async function POST(req: NextRequest) {
	const body: IFormData = await req.json();
	const { name, email, phone, message } = body;

	try {
		const info = await transporter.sendMail({
			from: process.env.NODMAILER_USER,
			to: process.env.NODMAILER_RECIPIENT,
			subject: 'Wiadomość ze strony jdomagala.pl',
			text: getEmailTextTemplate(name, email, phone, message),
			html: getEmailHTMLTemplate(name, email, phone, message),
		});
		return new Response(JSON.stringify({ data: info }));
	} catch (error) {
		return new Response('Bad request', {
			status: 400,
		});
	}
}
