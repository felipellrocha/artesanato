const initialState = [
  {
    title: 'Vasos simples',
    screenshot: require('images/vases.jpg'),
    price: {
      value: 2.99,
      currency: 'USD',
    },
  },
  {
    title: 'Vasos de areia',
    screenshot: require('images/areias.jpg'),
    price: {
      value: 2.99,
      currency: 'USD',
    },
  },
];

export default function artwork(state = initialState, action) {
  return state;
}
