'use client';

import DesktopNavigation from '@/components/Navigation/DesktopNavigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import classes from '@styles/components/Navigation.module.scss';

import useRwd from '@/hooks/useRwd';
import MobileNavigation from '@/components/Navigation/MobileNavigation';
import { INavigationData } from '@/types/cmsTypes';
import Link from 'next/link';
import facebookLogo from '@/public/static/facebook-logo.svg';

interface IProps {
	data: INavigationData;
}

const Navigation = ({ data }: IProps) => {
	const { isRwd } = useRwd();
	const pathName = usePathname();
	const isHomePage = pathName === '/';
	const containerClassNames = `${classes.container} ${!isHomePage ? classes.notHomePage : ''}`;
	const { logoImage, email, facebookLink, phoneNumber, navigationLinks } = data;

	return (
		<header className={containerClassNames}>
			<div className={classes.wrapper}>
				{!isRwd && (
					<div className={classes.additional_info}>
						<div className={classes.email}>{email}</div>
						<div className={classes.phone}>{phoneNumber}</div>
						{facebookLink && (
							<Link href={facebookLink}>
								<Image src={facebookLogo.src} alt="Facebook logo" width={17} height={21} />
							</Link>
						)}
					</div>
				)}
				<div className={classes.logoAndButtons_wrapper}>
					{!!logoImage && (
						<div className={classes.logo}>
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
