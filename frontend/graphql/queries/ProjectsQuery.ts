export const projectsQuery = `
	query Projects {
		projects {
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
	}
`;
