import { gql } from '@apollo/client';

export const navigationQuery = gql`
	query {
		navigation {
			data {
				attributes {
					logo {
						data {
							attributes {
								url
							}
						}
					}
					navigationButtons {
						content
						link
					}
					emailAddress
					phoneNumber
				}
			}
		}
	}
`;
