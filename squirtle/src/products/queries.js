export const getSingle = (id) => `
{
  product(id: "${id}") {
		id
    title
    screenshot
    description
    comments {
      id
      text
      datetime
      user {
        id
				firstName
				lastName
				image
			}
		}
    price {
      value
      currency
    }
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
    id
    title
    screenshot
    price {
      value
      currency
    }
  }
}
`
