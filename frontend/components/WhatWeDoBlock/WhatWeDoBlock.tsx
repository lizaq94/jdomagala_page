import Popup from '@/components/Popup/Popup';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from '@styles/sections/WhatWeDoBlock.module.scss';
import { Buildings } from '@phosphor-icons/react';

interface IProps {
	title: string;
	icon: string;
	shortDescription: string;
	longDescription: string;
	buttonText: string;
}

const WhatWeDoBlock = ({ title, icon, shortDescription, longDescription, buttonText }: IProps): JSX.Element => {
	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.icon}>
					<Buildings size={32} />
				</span>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.shortDescription}>{shortDescription}</p>
				{!!longDescription && (
					<motion.button whileHover={{ y: '-2px' }} className={styles.button}>
						{buttonText}
					</motion.button>
				)}
			</div>
		</>
	);
};

export default WhatWeDoBlock;
