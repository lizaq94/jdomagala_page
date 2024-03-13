import { motion } from 'framer-motion';
import classes from '@styles/components/FormNotification.module.scss';
import { CheckCircle, XCircle } from '@phosphor-icons/react';

interface IProps {
	message: string;
	isError?: boolean;
}

const FormNotification = ({ message, isError = false }: IProps) => {
	const toastAnimation = {
		visible: { x: '-50%', y: 10, scale: 1 },
		hidden: { x: '-50%', y: -45, scale: 0.9 },
	};

	const classWrapper = `${classes.wrapper} ${isError ? classes.error : ''}`;

	return (
		<motion.div variants={toastAnimation} initial="hidden" animate="visible" exit="hidden" className={classWrapper}>
			{isError ? <XCircle size={30} weight="bold" /> : <CheckCircle size={30} />}
			<span className={classes.message}>{message}</span>
		</motion.div>
	);
};

export default FormNotification;
