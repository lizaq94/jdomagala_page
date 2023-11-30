import React from 'react';
import styles from '@styles//components/Heading.module.scss';

const Heading = ({ children }): JSX.Element => {
	return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
