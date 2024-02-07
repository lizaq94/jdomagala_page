'use client';

import React from 'react';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import classes from '@styles/sections/AboutUsSection.module.scss';

const AchievementSection = (): JSX.Element | null => {
	return (
		<Section>
			<Heading>About us</Heading>
			<div className={classes.wrapper}>
				<div className={classes.leftSideWrapper}>
					<img src="https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_1280.jpg " alt="" />
				</div>
				<div className={classes.rightSideWrapper}>
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
				</div>
			</div>
		</Section>
	);
};

export default AchievementSection;
