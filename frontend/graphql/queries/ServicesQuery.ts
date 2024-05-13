export const servicesQuery = `
     query Services {
          services {
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
            slug
          }
     }
`;
