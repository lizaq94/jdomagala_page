import { motion } from 'framer-motion';
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

	const baseClasses = 'fixed flex items-center h-10 top-0 left-1/2 -translate-x-1/2 px-[30px] py-2.5 rounded z-[100] shadow-[9px_3px_24px_-14px_rgba(66,68,90,1)]';
	const colorClasses = isError
		? 'bg-[#ffccbc] text-[#b71c1c]'
		: 'bg-[#dcedc8] text-[#33691e]';

	return (
		<motion.div
			variants={toastAnimation}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className={`${baseClasses} ${colorClasses}`}
		>
			{isError ? <XCircle size={30} weight="bold" /> : <CheckCircle size={30} />}
			<span className="ml-2.5 text-sm">{message}</span>
		</motion.div>
	);
};

export default FormNotification;
