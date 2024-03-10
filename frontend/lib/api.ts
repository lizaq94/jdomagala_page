import { IFormData } from '@/types/FormData';

export const sendContactForm = async (values: IFormData) =>
	await fetch('/api/form', {
		method: 'POST',
		body: JSON.stringify({
			name: values.name,
			email: values.email,
			phone: values.phone,
			message: values.message,
		}),
		headers: {
			'content-type': 'application/json',
		},
	}).then((res) => {
		if (!res.ok) throw new Error('Przepraszamy, nie udało się wysłać wiadomości. Prosimy spróbować ponownie później.');
		return res.json();
	});
