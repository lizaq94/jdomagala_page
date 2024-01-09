import React from 'react';
import styles from '@styles//components/FlexBlocks.module.scss';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	additionalClassName?: string;
}
const FlexBlocks = ({ children, additionalClassName = '' }: IProps): JSX.Element => {
	return <div className={`${styles.wrapper} ${styles[additionalClassName]}`}>{children}</div>;
};

export default FlexBlocks;
