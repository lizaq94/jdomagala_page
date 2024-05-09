export const homePageQuery = `
    query HomePage {
		homePages {
			navigation {
				id
				navigatnionLinks {
					label
				}
			}
			serviceSectionTile
			projectsSectionTile
		}
	}`;
