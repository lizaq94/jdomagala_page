export const homePageQuery = `
  query HomePage {
		homePages {
			heroSection {
				title
				description
				button {
					id
					label
					url
				}
				imageBackground {
					url
				}
			}
			serviceSectionTile
			serviceSectionId
			whyWeSection {
				title
				blocks {
					id
					title
					description
					image {
						url
					}
				}
				sectionId
			}
			achievementSection {
				achievementCounters {
					id
					countNumber
					description
				}
				backgroundImage {
				    url
				}
			}
			projectsSectionTile
			projectSectionButtonText
			projectSectionId
			aboutUsSection {
				title
				content
				image {
					url
				}
				sectionId
			}
			contactSection {
				title
				buttonText
				nameInput {
					label
					placeholder
				}
				emailInput {
					label
					placeholder
				}
				phoneInput {
					label
					placeholder
				}
				messageInput {
					label
					placeholder
				}
				sectionId
				image {
				    url
				}
			}
		}
	}`;
