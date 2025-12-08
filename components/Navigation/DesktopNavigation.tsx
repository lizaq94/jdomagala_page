'use client';

import Button from '@/components/Button/Button';
import { ICMSLink } from '@/types/cmsTypes';

interface IProps {
	buttons: ICMSLink[];
}

const DesktopNavigation = ({ buttons }: IProps) => {
	return (
		<div className="flex [&>a:last-child]:mr-0">
			{buttons.map(({ url, label, id }, index) => (
				<Button key={id} content={label} url={url} hoverEffect outline={index + 1 === buttons.length} />
			))}
		</div>
	);
};

export default DesktopNavigation;
