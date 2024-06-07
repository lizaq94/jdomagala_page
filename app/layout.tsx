import '@styles/base/global.scss';
import Navigation from '@/components/Navigation/Navigation';
import { Raleway, Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import { getNavigationAndFooterData } from '@/lib/api';

export const metadata = {
	title: 'JDomagala - usługi budowlano-remontowe',
	description: 'Generated by create next app',
};

const openSans_init = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	variable: '--fontPrimary',
});

const raleway_init = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700', '900'],
	variable: '--fontSecondary',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const data = await getNavigationAndFooterData();

	if (!data) return null;

	const { navigationData, footerData } = data;

	return (
		<html lang="en">
			<body className={`${openSans_init.variable} ${raleway_init.variable}`}>
				<Navigation data={navigationData} />
				{children}
				<Footer data={footerData} navigationLinks={navigationData.navigationLinks} />
			</body>
		</html>
	);
}