export const projectQuery = `
    query Project($slug: String!) {
		project(where: { slug: $slug }) {
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
	}`;
