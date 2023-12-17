import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import styles from '@/styles/components/AnimatedCounter.module.scss';

type IProps = {
	from?: number;
	to: number;
	description: string;
};

const AnimatedCounter = ({ from = 0, to, description }: IProps) => {
	const count = useMotionValue(from);
	const rounded = useTransform(count, (latest: number) => {
		return Math.round(latest);
	});
	const ref = useRef(null);
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			animate(count, to, { duration: 2 });
		}
	}, [count, inView, to]);

	return (
		<div className={styles.wrapper}>
			<motion.span ref={ref} className={styles.counter}>
				{rounded}
			</motion.span>
			{!!description && <span className={styles.description}>{description}</span>}
		</div>
	);
};

export default AnimatedCounter;
