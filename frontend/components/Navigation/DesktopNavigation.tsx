'use client';

import styles from '@styles/components/Navigation.module.scss';
import Button from '@/components/Button/Button';

import { NavigationButton } from '@/types/NavigationData';
import { useState } from 'react';

interface IProps {
	buttons: NavigationButton[];
}

const DesktopNavigation = ({ buttons }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.buttons}>
			{buttons.map(({ content, link }, index) => (
				<Button key={index} content={content} url={link} hoverEffect outline={index + 1 === buttons.length} />
			))}
		</div>
	);
};

export default DesktopNavigation;
