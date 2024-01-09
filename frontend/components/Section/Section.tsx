import styles from '@styles//components/Section.module.scss';
import React, { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	center?: boolean;
}

const Section = ({ children, center }: IProps) => {
	const classes = `${styles.wrapper} ${center ? styles.center : ''}`;
	return <section className={classes}>{children}</section>;
};

export default Section;
