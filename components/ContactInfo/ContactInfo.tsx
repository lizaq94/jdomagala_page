'use client';

import { Mail, Phone } from 'lucide-react';

interface IProps {
	email?: string;
	phone?: string;
}

const ContactInfo = ({ email, phone }: IProps) => {
	const contactInfo = [
		{
			icon: Mail,
			label: 'Email',
			value: email || 'kontakt@jdomagala.pl',
			href: `mailto:${email || 'kontakt@jdomagala.pl'}`,
		},
		{
			icon: Phone,
			label: 'Telefon',
			value: phone || '+48 123 456 789',
			href: `tel:${phone || '+48123456789'}`,
		},
	];

	return (
		<div className="flex flex-col">
			<h3 className="text-2xl font-bold mb-8">Skontaktuj się z nami</h3>
			<div className="space-y-6">
				{contactInfo.map((item, index) => (
					<div key={index} className="flex items-center gap-4">
						<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
							<item.icon className="w-5 h-5 text-white" />
						</div>
						<div>
							<p className="text-sm text-slate-500">{item.label}</p>
							<a
								href={item.href}
								className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
							>
								{item.value}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContactInfo;
