import { gql } from '@apollo/client';

export const projectsSectionQuery = gql`
	query {
		projectsSection {
			data {
				attributes {
					title
					buttonText
				}
			}
		}
	}
`;
