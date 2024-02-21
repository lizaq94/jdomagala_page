import { Property } from 'csstype';
import React from 'react';
import styles from '@styles//components/Heading.module.scss';
import { ReactNode } from 'react';
import TextAlign = Property.TextAlign;

interface IProps {
	children: ReactNode;
	align?: TextAlign;
}

const Heading = ({ children, align = 'center' }: IProps): JSX.Element => {
	return (
		<h2 className={styles.heading} style={{ textAlign: align }}>
			{children}
		</h2>
	);
};

export default Heading;
