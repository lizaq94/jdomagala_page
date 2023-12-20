import { gql } from '@apollo/client';

export const achievementSectionQuery = gql`
	query {
		achievementSection {
			data {
				attributes {
					background {
						data {
							attributes {
								url
							}
						}
					}
					counters {
						id
						count
						description
					}
				}
			}
		}
	}
`;
