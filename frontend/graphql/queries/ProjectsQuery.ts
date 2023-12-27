import { gql } from '@apollo/client';

export const projectsQuery = gql`
	query {
		projects {
			data {
				attributes {
					title
					description
					status
					localization
					images {
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
