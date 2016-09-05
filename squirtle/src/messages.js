import flattenMessages from 'utils/flatten'

export default flattenMessages({
  AuthForm: {
    username: 'Usuário',
    password: 'Senha',
    login: 'Login',
    forgot: 'Esqueceu a Senha',
  },
  Common: {
    seller: 'Artesão',
  },
  Product: {
    addToCart: 'Add to cart',
  },
  Menu: {
    main: 'Página principal',
    account: 'Conta',
    about: 'Sobre o site',
  },
  SingleProductPage: {
		comment: 'Comentários',
    submit: 'Enviar',
    writeAComment: 'Seja o primeiro a enviar um comentário!',
	},
  CartReviewPage: {
    total: 'Total',
  }
});
