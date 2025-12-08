'use client';

import DesktopNavigation from '@/components/Navigation/DesktopNavigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import useRwd from '@/hooks/useRwd';
import MobileNavigation from '@/components/Navigation/MobileNavigation';
import { INavigationData } from '@/types/cmsTypes';
import Link from 'next/link';

interface IProps {
	data: INavigationData;
}

const Navigation = ({ data }: IProps) => {
	const { isRwd } = useRwd();
	const pathName = usePathname();
	const isHomePage = pathName === '/';
	const { logoImage, email, facebookLink, phoneNumber, navigationLinks } = data;

	return (
		<header className={`w-full ${!isHomePage ? 'md:shadow-[rgba(100,100,111,0.1)_0px_7px_30px_0px]' : ''}`}>
			<div className={`relative flex flex-col w-full max-w-[1200px] max-h-[118px] mx-auto pt-5 md:pt-0 md:pb-2.5 z-10 font-primary ${isHomePage ? 'text-white' : 'text-[#212121]'}`}>
				{!isRwd && (
					<div className="flex justify-end items-center my-2.5 mx-0 font-light text-xs">
						<a href={`mailto:${email}`} className="mr-5">
							{email}
						</a>

						<a href={`tel:${phoneNumber}`} className="mr-2.5">
							{phoneNumber}
						</a>
						{facebookLink && (
							<Link href={facebookLink}>
								<img src="/static/facebook-logo.svg" alt="Facebook logo" width={17} height={21} />
							</Link>
						)}
					</div>
				)}
				<div className="flex items-center justify-end">
					{!!logoImage && (
						<div className="relative h-20 w-[270px] z-10 ml-5 md:ml-0 md:mr-auto">
							<Image loader={({ src }) => src} src={logoImage.url} alt="" fill={true} />
						</div>
					)}
					{isRwd ? (
						<MobileNavigation buttons={navigationLinks} />
					) : (
						<DesktopNavigation buttons={navigationLinks} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Navigation;
