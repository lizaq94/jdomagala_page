'use client';

import Section from '@/components/Section/Section';
import classes from '@/styles/sections/ContactUsSection.module.scss';
import Form from '@/components/Form/Form';
import Heading from '@/components/Heading/Heading';
import { IContactSectionData } from '@/types/cmsTypes';
import Image from 'next/image';

interface IProps {
	data: IContactSectionData;
}

const ContactUsSection = ({ data }: IProps) => {
	if (!data) return null;

	const { title, buttonText, nameInput, emailInput, phoneInput, messageInput, sectionId, image } = data;

	const inputsData = { nameInput, emailInput, phoneInput, messageInput };

	return (
		<Section customClass={classes.wrapper} id={sectionId}>
			<div className={classes.leftSideWrapper}>
				<Heading title={title} customClass={classes.heading} />
				<Form inputs={inputsData} buttonText={buttonText} />
			</div>
			<div className={classes.rightSideWrapper}>
				<div className={classes.imageWrapper}>
					<Image src={image.url} alt="Contact Image" fill />
				</div>
			</div>
		</Section>
	);
};

export default ContactUsSection;
