'use client';

import Link from 'next/link';
import { ICMSLink } from '@/types/cmsTypes';

interface IProps {
	buttons: ICMSLink[];
}

const DesktopNavigation = ({ buttons }: IProps) => {
	const navLinks = buttons.slice(0, -1);
	const contactButton = buttons[buttons.length - 1];

	return (
		<div className="flex items-center gap-8">
			{navLinks.map(({ url, label, id }) => (
				<Link
					key={id}
					href={url}
					className="text-slate-700 hover:text-primary transition-colors font-medium relative group"
				>
					{label}
					<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
				</Link>
			))}

			{contactButton && (
				<Link
					href={contactButton.url}
					className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg font-medium"
				>
					{contactButton.label}
				</Link>
			)}
		</div>
	);
};

export default DesktopNavigation;
