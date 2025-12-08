'use client';

import { ICMSLink, IFooterData } from '@/types/cmsTypes';
import { marked } from 'marked';
import Button from '@/components/Button/Button';
import useRwd from '@/hooks/useRwd';

interface IProps {
	data: IFooterData;
	navigationLinks: ICMSLink[];
}

const Footer = ({ data, navigationLinks }: IProps) => {
	const { isRwd } = useRwd();

	if (!data || isRwd) return null;

	return (
		<footer className="flex justify-center items-center py-2.5 mt-[100px] bg-primary text-white">
			<div className="w-full max-w-[1200px] flex justify-between items-center">
				<div className="w-[250px] h-[94px]" dangerouslySetInnerHTML={{ __html: marked(data.content) }} />
				<nav className="h-[50px] flex justify-center items-center">
					{navigationLinks.map((link) => (
						<Button content={link.label} url={link.url} key={link.id} />
					))}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
