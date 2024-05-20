export const serviceQuery = `	
    query Service($slug: String!) {
		service(where: { slug: $slug }) {
		    id
			icon {
				id
				url
			}
			title
			shortDescription
			heroImage {
				id
				url
			}
			heroSubtitle
			contentSubtitle
			content
			contactBoxTitle
			contactBoxDescription
			buttonText
			buttonUrl
		}
	}
`;
