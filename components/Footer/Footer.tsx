'use client';

import { ICMSLink, IFooterData, INavigationData } from '@/types/cmsTypes';
import Link from 'next/link';
import { Facebook, Mail, Phone } from 'lucide-react';

interface IProps {
	data: IFooterData;
	navigationLinks: ICMSLink[];
	navigationData?: INavigationData;
}

const Footer = ({ data, navigationLinks, navigationData }: IProps) => {
	if (!data) return null;

	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-white mt-16 md:mt-24">
			<div className="w-full max-w-container mx-auto px-5 md:px-8 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
					<div>
						<Link href="/" className="inline-block mb-4">
							<span className="text-xl font-bold">JDOMagala</span>
						</Link>
						<p className="text-slate-400 text-sm leading-relaxed">
							Profesjonalne usługi budowlane i remontowe. Zaufaj doświadczeniu.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Nawigacja</h4>
						<nav className="flex flex-col space-y-2">
							{navigationLinks.map((link) => (
								<Link
									key={link.id}
									href={link.url}
									className="text-slate-400 hover:text-white transition-colors text-sm"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Kontakt</h4>
						<div className="space-y-3">
							{navigationData?.email && (
								<a
									href={`mailto:${navigationData.email}`}
									className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
								>
									<Mail className="w-4 h-4" />
									{navigationData.email}
								</a>
							)}
							{navigationData?.phoneNumber && (
								<a
									href={`tel:${navigationData.phoneNumber}`}
									className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
								>
									<Phone className="w-4 h-4" />
									{navigationData.phoneNumber}
								</a>
							)}
						</div>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Social Media</h4>
						<div className="flex gap-3">
							<a
								href={navigationData?.facebookLink}
								aria-label="Facebook"
								className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-slate-800 mt-12 pt-8 text-center">
					<p className="text-slate-400 text-sm">© {currentYear} JDOMagala. Wszelkie prawa zastrzeżone.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
