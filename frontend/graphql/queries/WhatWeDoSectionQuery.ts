import { gql } from '@apollo/client';

export const whatWeDoSectionQuery = gql`
	query {
		whatWeDoSection {
			data {
				attributes {
					sectionTitle
					whatWeDoBlocks {
						title
						icon {
							data {
								attributes {
									url
								}
							}
						}
						shortDescription
						longDescription
						textForButton
					}
				}
			}
		}
	}
`;
