'use client';

import styles from '@styles/components/Navigation.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import HamburgerButton from '@/components/HamburgerButton/HamburgerButton';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import { ICMSLink } from '@/types/cmsTypes';

interface IProps {
	buttons: ICMSLink[];
}

const MobileNavigation = ({ buttons }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const isHomePage = pathname === '/';
	const handleOpenMenu = () => setIsOpen(!isOpen);

	const getNavigationButtons = () => {
		return (
			<motion.div
				initial={{ opacity: 0, x: '-100%' }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, opacity: { duration: 0.4 } }}
				exit={{ opacity: 0.5, x: '-100%' }}
				className={styles.mobileButtonsWrapper}
			>
				{buttons.map(({ url, label, id }, index) => (
					<Button
						key={id}
						content={label}
						url={url}
						onClick={handleOpenMenu}
						hoverEffect
						outline={index + 1 === buttons.length}
						mobileNavigationButton
					/>
				))}
			</motion.div>
		);
	};

	return (
		<div className={styles.mobileWrapper}>
			<HamburgerButton
				isOpen={isOpen}
				size={30}
				color={`${isHomePage && !isOpen ? '#ffffff' : '#212121'}`}
				onClick={handleOpenMenu}
			/>
			<AnimatePresence>{isOpen && getNavigationButtons()}</AnimatePresence>
		</div>
	);
};

export default MobileNavigation;
