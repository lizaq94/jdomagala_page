import { gql } from '@apollo/client';

export const whatWeDoSectionQuery = gql`
	query {
		whatWeDoSection {
			data {
				attributes {
					title
					blocks {
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
						buttonText
					}
				}
			}
		}
	}
`;
