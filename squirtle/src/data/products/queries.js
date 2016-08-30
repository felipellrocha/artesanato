export const getSingle = (id) => `
{
  product(id: "${id}") {
		id
    title
    screenshot
    description
    comments {
      edges {
        node {
          id
          text
          createdAt
          user {
            id
            firstName
            username
            lastName
            image
          }    
        }
      }
		}
    price
    seller {
      id
      firstName
      lastName
      image
			description
		}
  }
}
`

export const getAll = () => `
{
  products {
    edges {
      node {
        id
        title
        screenshot
        price
      }
    }
  }
}
`
