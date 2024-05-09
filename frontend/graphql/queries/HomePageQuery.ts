export const homePageQuery = `
  query HomePage {
		homePages {
			navigation {
				id
				navigatnionLinks {
					label
				}
			}
			heroSection {
				title
				description
				button {
					id
				}
				imageBackground {
					url
				}
			}
			serviceSectionTile
			whyWeSection {
				title
				block {
					id
					title
					description
					image {
						url
					}
				}
			}
			achievementSection {
				achievementCounter {
					id
					number
					description
				}
			}
			projectsSectionTile
			projectSectionButtonText
			aboutUsSection {
				title
				content
				image {
					url
				}
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
			}
			footerContent
		}
	}`;
