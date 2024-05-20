import React from 'react';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import classes from '@styles/sections/AboutUsSection.module.scss';
import { motion } from 'framer-motion';

const AchievementSection = (): JSX.Element | null => {
	const imageAnimationVariants = {
		initial: {
			opacity: 0,
			x: -100,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0.2 },
		},
	};

	const contentAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 0.2 },
		},
	};

	return (
		<Section>
			<Heading title={`About <span>us</span>`} />
			<div className={classes.wrapper}>
				<motion.div
					variants={imageAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className={classes.leftSideWrapper}
				>
					<img src="https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_1280.jpg " alt="" />
				</motion.div>
				<motion.div
					variants={contentAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className={classes.rightSideWrapper}
				>
					<p className={classes.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet fringilla urna. Integer eget orci
						condimentum, varius urna vitae, congue justo. Aenean eu consequat neque. In sed odio nec dui vehicula tempor in quis
						lectus. Sed porta egestas purus eget tempus. Nam sagittis tortor sed ante tincidunt pellentesque. Integer vitae nisi
						maximus, tincidunt sapien a, interdum libero.
					</p>
					<p className={classes.paragraph}>
						Etiam commodo venenatis augue non tempor. Vivamus tincidunt, nibh efficitur lacinia lobortis, augue urna pharetra
						libero, sit amet lobortis purus nulla vitae libero. Nullam porttitor fermentum diam, in porta sapien imperdiet sit
						amet. Mauris quis nibh at felis efficitur aliquet. Sed arcu enim, varius non rutrum at, aliquet sit amet orci. Cras
						sit amet lorem ipsum. Nullam at hendrerit est.
					</p>
				</motion.div>
			</div>
		</Section>
	);
};

export default AchievementSection;
