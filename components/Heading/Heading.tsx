import React from 'react';

interface IProps {
	title: string;
	customClass?: string;
}

const Heading = ({ title, customClass }: IProps): JSX.Element => {
	const headingClasses = `
		section-heading
		w-full mb-[70px]
		font-secondary text-[50px] leading-[48px]
		md:text-[64px] md:leading-[62px]
		font-bold text-center uppercase
		px-5 md:px-0
		${customClass || ''}
	`.replace(/\s+/g, ' ').trim();

	return (
		<h2
			className={headingClasses}
			dangerouslySetInnerHTML={{ __html: title }}
		/>
	);
};

export default Heading;
