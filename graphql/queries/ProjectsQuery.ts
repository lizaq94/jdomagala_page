export const projectsQuery = `
	query Projects {
		projects {
			id
			slug
			title
			subtitle
			 projectInformation {
              id
              label
              placeholder
            }
			description
			scopeOfWorkTitle
			scopeOfWorkItems
			projectStatus
			images {
				id
				url
			}
			showGalleryCarousel
		}
	}
`;
