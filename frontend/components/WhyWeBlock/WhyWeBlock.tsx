import React from 'react';
import classes from '@styles/sections/WhyWeBlock.module.scss';

interface IProps {
	title: string;
	image: string;
	index: number;
	description: string;
}

const WhyWeBlock = ({ title, description, image, index }: IProps): JSX.Element => {
	const blockNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;

	return (
		<div className={classes.wrapper} style={{ backgroundImage: `url(${image})` }}>
			<h3 className={classes.title}>{title}</h3>
			<p className={classes.description}>{description}</p>
			<span className={classes.blockNumber}>{blockNumber}</span>
		</div>
	);
};

export default WhyWeBlock;
