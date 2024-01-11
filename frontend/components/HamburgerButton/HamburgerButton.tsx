import { motion, Transition, SVGMotionProps } from 'framer-motion';

interface IProps {
	isOpen: boolean;
	size: number;
	color: string;
	onClick: () => void;
}
const HamburgerButton = ({ isOpen, onClick, size, color }: IProps) => {
	const variant = isOpen ? 'opened' : 'closed';
	const top = {
		closed: {
			rotate: 0,
			translateY: 0,
		},
		opened: {
			rotate: 45,
			translateY: 2,
		},
	};
	const center = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const bottom = {
		closed: {
			rotate: 0,
			translateY: 0,
		},
		opened: {
			rotate: -45,
			translateY: -2,
		},
	};

	const lineProps = {
		stroke: color,
		strokeWidth: 1,
		vectorEffect: 'non-scaling-stroke',
		initial: 'closed',
		animate: variant,
		transition: { type: 'spring', stiffness: 260, damping: 20 },
	};

	return (
		<motion.svg viewBox={`0 0 4 4`} overflow="visible" preserveAspectRatio="none" width={size} height={size} onClick={onClick}>
			<motion.line x1="0" x2="4" y1="0" y2="0" variants={top} {...lineProps} />
			<motion.line x1="0" x2="4" y1="2" y2="2" variants={center} {...lineProps} />
			<motion.line x1="0" x2="4" y1="4" y2="4" variants={bottom} {...lineProps} />
		</motion.svg>
	);
};

export default HamburgerButton;
