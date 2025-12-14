'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { ICMSLink } from '@/types/cmsTypes';

interface IProps {
	buttons: ICMSLink[];
}

const MobileNavigation = ({ buttons }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
			document.body.style.top = `-${window.scrollY}px`;
		} else {
			const scrollY = document.body.style.top;
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || '0') * -1);
			}
		}
		return () => {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
		};
	}, [isOpen]);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const navLinks = buttons.slice(0, -1);
	const contactButton = buttons[buttons.length - 1];

	return (
		<>
			<button
				onClick={toggleMenu}
				className="relative z-[200] flex items-center justify-center w-10 h-10"
				aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
			>
				{isOpen ? (
					<X className="w-7 h-7 text-slate-900" strokeWidth={2} />
				) : (
					<Menu className="w-7 h-7 text-slate-900" strokeWidth={2} />
				)}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.3 }}
						className="fixed inset-0 z-[150] bg-white"
						style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
					>
						<div className="flex flex-col items-center justify-center h-full gap-6 px-6">
							{navLinks.map(({ url, label, id }) => (
								<Link
									key={id}
									href={url}
									onClick={closeMenu}
									className="text-2xl font-semibold text-slate-800 hover:text-primary transition-colors"
								>
									{label}
								</Link>
							))}

							{contactButton && (
								<Link
									href={contactButton.url}
									onClick={closeMenu}
									className="mt-4 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-lg"
								>
									{contactButton.label}
								</Link>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNavigation;
