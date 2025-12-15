import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import { IContactSectionData } from '@/types/cmsTypes';
import { getNavigationAndFooterData } from '@/lib/api';
import dynamic from 'next/dynamic';

const ContactInfo = dynamic(() => import('@/components/ContactInfo/ContactInfo'), { ssr: false });
const Form = dynamic(() => import('@/components/Form/Form'), { ssr: false });

interface IProps {
	data: IContactSectionData;
}

const ContactUsSection = async ({ data }: IProps) => {
	if (!data) return null;

	const navData = await getNavigationAndFooterData();
	const navigationData = navData?.navigationData;

	const { title, buttonText, nameInput, emailInput, phoneInput, messageInput, sectionId } = data;

	const inputsData = { nameInput, emailInput, phoneInput, messageInput };

	return (
		<Section id={sectionId}>
			<Heading title={title} />
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 px-5 md:px-0 items-start">
				<ContactInfo
					email={navigationData?.email}
					phone={navigationData?.phoneNumber}
				/>
				<div className="bg-slate-50 rounded-lg p-8">
					<Form inputs={inputsData} buttonText={buttonText} />
				</div>
			</div>
		</Section>
	);
};

export default ContactUsSection;
