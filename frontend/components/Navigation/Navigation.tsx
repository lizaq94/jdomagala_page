'use client';

import DesktopNavigation from '@/components/Navigation/DesktopNavigation';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Image from 'next/image';
import classes from '@styles/components/Navigation.module.scss';
import { INavigationData } from '@/types/NavigationData';
import useRwd from '@/hooks/useRwd';
import MobileNavigation from '@/components/Navigation/MobileNavigation';

const navigationButtons = [
	{ content: 'About us', link: '/' },
	{ content: 'Offers', link: '/' },
	{ content: 'Projects', link: '/' },
	{ content: 'Contact us', link: '/' },
];

const data = {
	logo: {
		url: 'https://assets.turbologo.com/blog/en/2018/03/19085254/prozrachniy-logo-1-800x575.png',
		alternativeText: '',
	},
	navigationButtons,
	emailAddress: 'jdomagala@gmail.com',
	phoneNumber: '737 232 232',
} as {} as INavigationData;

const Navigation = () => {
	const { isRwd } = useRwd();
	const pathName = usePathname();
	const isHomePage = pathName === '/';
	const containerClassNames = `${classes.container} ${!isHomePage ? classes.notHomePage : ''}`;
	const { logo, navigationButtons, emailAddress, phoneNumber } = data;

	return (
		<header className={containerClassNames}>
			<div className={classes.wrapper}>
				{!isRwd && (
					<div className={classes.additional_info}>
						<div className={classes.email}>{emailAddress}</div>
						<div className={classes.phone}>{phoneNumber}</div>
					</div>
				)}
				<div className={classes.logoAndButtons_wrapper}>
					<div className={classes.logo}>
						<Image loader={({ src }) => src} src={logo.url} alt="" fill={true} />
					</div>
					{isRwd ? <MobileNavigation buttons={navigationButtons} /> : <DesktopNavigation buttons={navigationButtons} />}
				</div>
			</div>
		</header>
	);
};

export default Navigation;
