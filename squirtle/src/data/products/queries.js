export const sendComment = (text, userId, productId) => `
mutation CommentCreator {
  createComment(
    text:"${text}"
    userId: "${userId}"
    productId: "${productId}"
  ) {
    ok
    comment {
      id
      pk
      text
      createdAt
      product {
        id
      }
      user {
        id
        pk
        firstName
        lastName
        image
        description
      }
    }
  }
}`

export const getSingle = (id) => `
{
  product(id: "${id}") {
		id
    pk
    title
    screenshot
    description
    priceValue
    priceCurrency
    comments {
      id
      pk
      text
      createdAt
      user {
        id
        pk
        firstName
        username
        lastName
        image
      }
		}
    seller {
      id
      pk
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
    priceValue
    priceCurrency
  }
}
`
