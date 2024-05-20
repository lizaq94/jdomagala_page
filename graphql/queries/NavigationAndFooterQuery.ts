export const navigationAndFooterQuery = `
  query NavigationAndFooter {
		 homePages {
            navigation {
                id
				logoImage {
					url
				}
				email
				phoneNumber
				facebookLink
				navigationLinks {
					id	
					label
					url
				}
            }
            footerContent
            metaTitle
            metaDescription
         }
	}`;
