'use client';

import { useSuspenseQuery } from '@apollo/client';
import { ReactNode } from 'react';
import { navigationQuery } from '@/graphql/queries/NavigationQuery';
import Image from 'next/image';
import styles from '@styles/components/Navigation.module.scss';
import { IImage } from '@/types/ImageType';
import Button from '@/components/Button/Button';

interface IProps {
	children: ReactNode;
}

interface INavigationData {
	navigation: {
		data: {
			attributes: {
				logo: IImage;
				navigationButtons: { content: string; link: string }[];
				emailAddress: string;
				phoneNumber: string;
			};
		};
	};
}
const Navigation = () => {
	const {
		data: { navigation },
	} = useSuspenseQuery<INavigationData>(navigationQuery);
	const { logo, navigationButtons, emailAddress, phoneNumber } = navigation.data.attributes;
	const logoUrl = `http://localhost:1337${logo.data.attributes.url}`;
	return (
		<div className={styles.navigation}>
			<div className={styles.navigation_additional_info}>
				<div className={styles.navigation_email}>{emailAddress}</div>
				<div className={styles.navigation_phone}>{phoneNumber}</div>
			</div>
			<div className={styles.navigation_wrapper}>
				<div className={styles.navigation_logo}>
					<Image loader={({ src }) => src} src={logoUrl} alt="" fill={true} />
				</div>
				<div className={styles.navigations_buttons}>
					{navigationButtons.map(({ content, link }, index) => (
						<Button content={content} url={link} hoverEffect outline={index + 1 === navigationButtons.length} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Navigation;
