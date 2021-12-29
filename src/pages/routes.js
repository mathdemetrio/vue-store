const Home = import('./Home')
const Checkout = import('./Checkout')

const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home 
  },
  { 
    path: '/checkout',
    name: 'checkout',
    component: Checkout 
  },
]

export default routes