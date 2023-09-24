import WhatWeDoBlock from '@/components/WhatWeDoBlock/WhatWeDoBlock';
import { whatWeDoSectionQuery } from '@/graphql/queries/WhatWeDoSectionQuery';
import { useSuspenseQuery } from '@apollo/client';
import React from 'react';
import styles from '@styles//sections/WhatWeDoSection.module.scss';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import { IImageData } from '@/types/ImageType';

interface IWhatWeDoBlock {
	title: string;
	icon: IImageData;
	shortDescription: string;
	longDescription: string;
	textForButton: string;
}

interface IWhatWeDoSection {
	sectionTitle: string;
	whatWeDoBlocks: IWhatWeDoBlock[];
}

const WhatWeDoSection = (): JSX.Element | null => {
	const response = extractDataFromApiResponse<IWhatWeDoSection>(useSuspenseQuery(whatWeDoSectionQuery));

	if (!response) return null;

	const { sectionTitle, whatWeDoBlocks } = response;

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{sectionTitle}</h2>
			<div className={styles.blocks_wrapper}>
				{whatWeDoBlocks?.map((block, index) => {
					const { title, icon, shortDescription, longDescription, textForButton } = block;

					return (
						<WhatWeDoBlock
							title={title}
							icon={getImageUrl(icon)}
							shortDescription={shortDescription}
							longDescription={longDescription}
							buttonText={textForButton}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default WhatWeDoSection;
