import Popup from '@/components/Popup/Popup';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styles from '@styles/components/WhatWeDoBlock.module.scss';

interface IProps {
	title: string;
	icon: string;
	shortDescription: string;
	longDescription: string;
	buttonText: string;
}

const WhatWeDoBlock = ({ title, icon, shortDescription, longDescription, buttonText }: IProps): JSX.Element => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const onOpenButton = () => setIsPopupOpen(true);
	const onCloseButton = () => setIsPopupOpen(false);

	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.icon}>
					<img src={icon} alt="" />
				</span>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.shortDescription}>{shortDescription}</p>
				{!!longDescription && (
					<button className={styles.button} onClick={onOpenButton}>
						{buttonText}
					</button>
				)}
			</div>
			<AnimatePresence>{isPopupOpen && <Popup content={longDescription} onCloseButton={onCloseButton} />}</AnimatePresence>
		</>
	);
};

export default WhatWeDoBlock;
