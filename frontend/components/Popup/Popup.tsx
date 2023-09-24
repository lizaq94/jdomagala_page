import React from 'react';
import styles from '@styles/components/Popup.module.scss';

interface IProps {
	content: string;
	onCloseButton: () => void;
}

const Popup = ({ content, onCloseButton }: IProps): JSX.Element => {
	return (
		<div className={styles.background}>
			<div className={styles.content_wrapper}>
				<span className={styles.close_button} onClick={onCloseButton} />
				<div className={styles.content}>{content}</div>
			</div>
		</div>
	);
};

export default Popup;
