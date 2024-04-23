import React from 'react';
import classes from '@styles//components/Heading.module.scss';

interface IProps {
	title: string;
	customClass?: string;
}

const Heading = ({ title, customClass }: IProps): JSX.Element => {
	return <h2 className={`${classes.heading} ${customClass ? customClass : ''}`} dangerouslySetInnerHTML={{ __html: title }} />;
};

export default Heading;
