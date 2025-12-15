import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';

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
		<div className="flex flex-col items-center justify-center text-center">
			<motion.span ref={ref} className="text-6xl md:text-7xl font-bold text-blue-400 mb-4">
				{rounded}
			</motion.span>
			{!!description && (
				<span className="text-base md:text-lg font-light text-white/90 max-w-[200px]">
					{description}
				</span>
			)}
		</div>
	);
};

export default AnimatedCounter;
