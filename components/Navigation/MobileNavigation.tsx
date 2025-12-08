'use client';

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
				className="fixed top-0 bottom-0 left-0 right-0 h-screen flex flex-col justify-center items-center bg-[#f8f5f9] z-[100]"
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
		<div className="w-full h-full">
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
