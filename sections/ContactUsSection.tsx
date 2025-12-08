'use client';

import Section from '@/components/Section/Section';
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
		<Section customClass="md:flex md:mt-[200px]" id={sectionId}>
			<div className="flex flex-col justify-center items-center px-5 md:px-0 md:pr-[100px] md:py-11 md:flex-[0_0_50%]">
				<Heading title={title} customClass="md:text-left" />
				<Form inputs={inputsData} buttonText={buttonText} />
			</div>
			<div className="hidden md:block md:flex-[0_0_50%]">
				<div className="w-full h-full [&_img]:!static [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
					<Image src={image.url} alt="Contact Image" fill />
				</div>
			</div>
		</Section>
	);
};

export default ContactUsSection;
