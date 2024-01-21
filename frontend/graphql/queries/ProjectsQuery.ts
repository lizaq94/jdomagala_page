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
					slug
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
