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
		<div className="relative flex flex-col items-center justify-center z-[1] mb-[30px] md:mb-0 md:mr-[70px] md:last:mr-0">
			<motion.span ref={ref} className="text-5xl font-bold mb-5">
				{rounded}
			</motion.span>
			{!!description && (
				<span className="counter-description relative max-w-[120px] text-sm font-light text-center pt-2.5">
					{description}
				</span>
			)}
		</div>
	);
};

export default AnimatedCounter;
