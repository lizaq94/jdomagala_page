import React from 'react';
import styles from '@styles//components/Section.module.scss';

const Section = ({ children }): JSX.Element => {
	return <section className={styles.wrapper}>{children}</section>;
};

export default Section;
