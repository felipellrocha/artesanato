export const getSingle = (id) => `
{
  product(id: "${id}") {
    id
    title
    screenshot
    description
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
