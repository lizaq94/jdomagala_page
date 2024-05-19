import styles from '@styles//components/Section.module.scss';
import React, { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	center?: boolean;
	onFullPage?: boolean;
	customClass?: string;
	id?: string;
}

const Section = ({ children, center, onFullPage, customClass, id = '' }: IProps) => {
	const classes = `${styles.wrapper} ${center ? styles.center : ''} ${onFullPage ? styles.onFullPage : ''} ${
		!!customClass ? customClass : ''
	}`;
	return (
		<section className={classes} id={id}>
			{children}
		</section>
	);
};

export default Section;
