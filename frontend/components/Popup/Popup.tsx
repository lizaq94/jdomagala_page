import React, { useEffect } from 'react';
import styles from '@styles/components/Popup.module.scss';
import { X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';

interface IProps {
	content: string;
	onCloseButton: () => void;
}

const Popup = ({ content, onCloseButton }: IProps): JSX.Element => {
	const backgroundAnimation = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const popupAnimation = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.5 },
	};

	return (
		<motion.div variants={backgroundAnimation} initial="hidden" animate="visible" exit="hidden" className={styles.background}>
			<motion.div variants={popupAnimation} initial="hidden" animate="visible" exit="hidden" className={styles.content_wrapper}>
				<span className={styles.close_button} onClick={onCloseButton}>
					<X size={22} />
				</span>
				<div className={styles.content}>
					<Markdown>{content}</Markdown>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Popup;
