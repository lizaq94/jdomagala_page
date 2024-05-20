export const projectQuery = `
    query Project($slug: String!) {
		project(where: { slug: $slug }) {
		    id
			slug
			title
			subtitle
			description
			scopeOfWorkTitle
			scopeOfWorkItem
			projectStatus
			images {
				id
				url
			}
		}
	}`;
