import { gql } from '@apollo/client';

export const whyWeSectionQuery = gql`
	query {
		whyWeSection {
			data {
				attributes {
					sectionTitle
					reasons {
						title
						description
						icon {
							data {
								attributes {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`;
