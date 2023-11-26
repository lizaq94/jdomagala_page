import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import WhyWeBlock from '@/components/WhyWeBlock/WhyWeBlock';
import React from 'react';

const WhyWeSection = (): JSX.Element => {
	return (
		<Section>
			<Heading>{'Why we?'}</Heading>
			<FlexBlocks>
				<WhyWeBlock
					title="Reason 1"
					icon=""
					description="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac condimentum velit. Nunc pulvinar cursus viverr"
				/>
				<WhyWeBlock
					title="Reason 1"
					icon=""
					description="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac condimentum velit. Nunc pulvinar cursus viverr"
				/>
				<WhyWeBlock
					title="Reason 1"
					icon=""
					description="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac condimentum velit. Nunc pulvinar cursus viverr"
				/>
			</FlexBlocks>
		</Section>
	);
};

export default WhyWeSection;
