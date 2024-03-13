'use client';

import DesktopNavigation from '@/components/Navigation/DesktopNavigation';
import { useSuspenseQuery } from '@apollo/client';
import { ReactNode } from 'react';
import { navigationQuery } from '@/graphql/queries/NavigationQuery';
import Image from 'next/image';
import styles from '@styles/components/Navigation.module.scss';
import Button from '@/components/Button/Button';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import { INavigationData } from '@/types/NavigationData';
import useRwd from '@/hooks/useRwd';
import MobileNavigation from '@/components/Navigation/MobileNavigation';

interface IProps {
	children: ReactNode;
}

const Navigation = () => {
	const { isRwd } = useRwd();
	const response = extractDataFromApiResponse<INavigationData>(useSuspenseQuery(navigationQuery));

	if (!response) return null;

	const { logo, navigationButtons, emailAddress, phoneNumber } = response;
	const logoUrl = getImageUrl(logo);

	return (
		<header className={styles.wrapper}>
			{!isRwd && (
				<div className={styles.additional_info}>
					<div className={styles.email}>{emailAddress}</div>
					<div className={styles.phone}>{phoneNumber}</div>
				</div>
			)}
			<div className={styles.logoAndButtons_wrapper}>
				<div className={styles.logo}>
					<Image loader={({ src }) => src} src={logoUrl} alt="" fill={true} />
				</div>
				{isRwd ? <MobileNavigation buttons={navigationButtons} /> : <DesktopNavigation buttons={navigationButtons} />}
			</div>
		</header>
	);
};

export default Navigation;
