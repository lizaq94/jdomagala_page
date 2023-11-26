import React from 'react';
import styles from '@styles//components/FlexBlocks.module.scss';

const FlexBlocks = ({ children }): JSX.Element => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default FlexBlocks;
