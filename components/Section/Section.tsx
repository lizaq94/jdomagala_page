import React, { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	center?: boolean;
	onFullPage?: boolean;
	customClass?: string;
	id?: string;
}

const Section = ({ children, center, onFullPage, customClass, id = '' }: IProps) => {
	const baseClasses = 'w-full max-w-container mt-[70px] md:mt-[100px] mx-auto';
	const centerClasses = center ? 'flex flex-col justify-center items-center' : '';
	const fullPageClasses = onFullPage ? 'max-w-none' : '';

	const classes = `${baseClasses} ${centerClasses} ${fullPageClasses} ${customClass || ''}`.trim();

	return (
		<section className={classes} id={id}>
			{children}
		</section>
	);
};

export default Section;
