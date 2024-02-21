import React from 'react';
import classes from '@styles//components/Heading.module.scss';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	customClass?: string;
}

const Heading = ({ children, customClass }: IProps): JSX.Element => {
	return <h2 className={`${classes.heading} ${customClass ? customClass : ''}`}>{children}</h2>;
};

export default Heading;
