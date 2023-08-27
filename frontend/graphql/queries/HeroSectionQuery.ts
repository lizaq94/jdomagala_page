import { gql } from '@apollo/client';

export const heroSectionQuery = gql`
	query {
		heroSection {
			data {
				attributes {
					title
					description
					backgroundImage {
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
`;
