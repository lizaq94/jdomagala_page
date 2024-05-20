'use client';

import Section from '@/components/Section/Section';
import classes from '@/styles/sections/ContactUsSection.module.scss';
import Form from '@/components/Form/Form';
import Heading from '@/components/Heading/Heading';

const ContactUsSection = (): JSX.Element | null => {
	return (
		<Section customClass={classes.wrapper}>
			<div className={classes.leftSideWrapper}>
				<Heading customClass={classes.heading}>Contact with us</Heading>
				<Form />
			</div>
			<div className={classes.rightSideWrapper}>
				<div className={classes.imageWrapper}>
					<img
						src="https://mapiko.pl/wp-content/uploads/elementor/thumbs/budujemy-z-pasja-mapiko-pw772b52h95ipot17yz1b21zcqyuyd47q59ht15ugm.jpg"
						alt=""
					/>
				</div>
			</div>
		</Section>
	);
};

export default ContactUsSection;
