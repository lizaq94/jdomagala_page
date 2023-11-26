import React from 'react';
import styles from '@styles/components/WhyWeBlock.module.scss';

interface IProps {
	title: string;
	icon: string;
	description: string;
}

const WhyWeBlock = ({ title, icon, description }: IProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Reason 1</h3>
			<p className={styles.description}>
				Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus ac condimentum velit. Nunc pulvinar cursus viverr
			</p>
			<span className={styles.icon}>
				<img src={icon} alt="" />
			</span>
		</div>
	);
};

export default WhyWeBlock;
