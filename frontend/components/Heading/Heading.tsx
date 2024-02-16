import React from 'react';
import styles from '@styles//components/Heading.module.scss';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const Heading = ({ children }: IProps): JSX.Element => {
	return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
