'use client';

import classes from '@/styles/components/Footer.module.scss';
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
		<footer className={classes.wrapper}>
			<div className={classes.content}>
				<div className={classes.address} dangerouslySetInnerHTML={{ __html: marked(data.content) }} />
				<nav className={classes.buttonsWrapper}>
					{navigationLinks.map((link) => (
						<Button content={link.label} url={link.url} key={link.id} />
					))}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
