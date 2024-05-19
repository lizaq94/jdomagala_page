import '@styles/base/global.scss';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import { getNavigationAndFooterData } from '@/lib/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const data = await getNavigationAndFooterData();

	if (!data) return null;

	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation data={data.navigationData} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
