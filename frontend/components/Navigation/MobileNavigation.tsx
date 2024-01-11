'use client';

import styles from '@styles/components/Navigation.module.scss';
import Button from '@/components/Button/Button';

import { NavigationButton } from '@/types/NavigationData';
import HamburgerButton from '@/components/HamburgerButton/HamburgerButton';
import { useState } from 'react';

interface IProps {
	buttons: NavigationButton[];
}

const MobileNavigation = ({ buttons }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenMenu = () => setIsOpen(!isOpen);

	return (
		<div className={styles.buttons}>
			<HamburgerButton isOpen={true} size={24} color={'#000'} onClick={handleOpenMenu} />
			{isOpen &&
				buttons.map(({ content, link }, index) => (
					<Button key={index} content={content} url={link} hoverEffect outline={index + 1 === buttons.length} />
				))}
		</div>
	);
};

export default MobileNavigation;
