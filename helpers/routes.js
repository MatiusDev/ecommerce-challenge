import Home from "../components/Home.js";
import Cart from "../components/Cart.js";
import Products from "../components/Products.js";
import Payment from "../components/Payment.js";
import NotFound from "../components/NotFound.js";
import ProductDetail from "../components/ProductDetail.js";

export default {
  home: {
    path: '/',
    template: Home,
  },
  products: {
    path: '/products',
    template: Products,
    subpaths: [
      {
        path: '/:gender/:id',
        template: ProductDetail,
      }
    ]
  },
  cart: {
    path: '/cart',
    template: Cart,
  },
  checkout: {
    path: '/payment',
    template: Payment,
  },
  notFound: {
    path: '/notFound',
    template: NotFound,
  }
};