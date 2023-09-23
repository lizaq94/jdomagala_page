import WhatWeDoBlock from '@/components/WhatWeDoBlock/WhatWeDoBlock';
import { whatWeDoSectionQuery } from '@/graphql/queries/WhatWeDoSectionQuery';
import { useSuspenseQuery } from '@apollo/client';
import React from 'react';
import styles from '@styles//sections/WhatWeDoSection.module.scss';

interface IWhatWeDoBlock {
	title: string;
	icon: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
	shortDescription: string;
	longDescription: string;
	buttonText: string;
}

interface IWhatWeDoSection {
	whatWeDoSection: {
		data: {
			attributes: {
				title: string;
				blocks: IWhatWeDoBlock[];
			};
		};
	};
}

const WhatWeDoSection = (): JSX.Element => {
	const {
		data: { whatWeDoSection },
	} = useSuspenseQuery<IWhatWeDoSection>(whatWeDoSectionQuery);
	const iconUrl = `http://localhost:1337${whatWeDoSection.data.attributes.blocks[0].icon.data.attributes.url}`;
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{whatWeDoSection.data.attributes.title}</h2>
			<div className={styles.blocks_wrapper}>
				<WhatWeDoBlock
					title="Lorem ipsum dolores "
					icon={iconUrl}
					shortDescription="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					longDescription="aaaaa"
					buttonText="Read more"
				/>{' '}
				<WhatWeDoBlock
					title="Lorem ipsum dolores "
					icon={iconUrl}
					shortDescription="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					longDescription=""
					buttonText="Read more"
				/>{' '}
				<WhatWeDoBlock
					title="Lorem ipsum dolores "
					icon={iconUrl}
					shortDescription="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					longDescription=""
					buttonText="Read more"
				/>{' '}
				<WhatWeDoBlock
					title="Lorem ipsum dolores "
					icon={iconUrl}
					shortDescription="Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					longDescription=""
					buttonText="Read more"
				/>
			</div>
		</div>
	);
};

export default WhatWeDoSection;
