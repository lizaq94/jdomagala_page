'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

import DesktopNavigation from '@/components/Navigation/DesktopNavigation';
import MobileNavigation from '@/components/Navigation/MobileNavigation';
import useRwd from '@/hooks/useRwd';
import { INavigationData } from '@/types/cmsTypes';

interface IProps {
	data: INavigationData;
}

const Navigation = ({ data }: IProps) => {
	const { isRwd } = useRwd();
	const { logoImage, navigationLinks } = data;

	const [scrolled, setScrolled] = useState(false);
	const [hidden, setHidden] = useState(false);

	const lastScrollY = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			const currentY = window.scrollY;
			const lastY = lastScrollY.current;

			setScrolled(currentY > 20);

			if (currentY > 100) {
				setHidden(currentY > lastY);
			} else {
				setHidden(false);
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300
				${scrolled ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] py-3' : 'bg-white py-4'}
				${hidden ? '-translate-y-full' : 'translate-y-0'}`}
		>
			<div className="w-full max-w-container mx-auto px-5 md:px-6">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3 cursor-pointer z-200">
						{logoImage ? (
							<div className="relative h-12 w-[180px] md:h-14 md:w-[220px]">
								<Image
									loader={({ src }) => src}
									src={logoImage.url}
									alt="JDOMagala"
									fill
									className="object-contain"
								/>
							</div>
						) : (
							<>
								<div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
									<Building2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
								</div>
								<div className="text-lg md:text-xl font-bold text-slate-900">JDOMagala</div>
							</>
						)}
					</Link>

					{!isRwd && <DesktopNavigation buttons={navigationLinks} />}
					{isRwd && <MobileNavigation buttons={navigationLinks} />}
				</div>
			</div>
		</header>
	);
};

export default Navigation;
