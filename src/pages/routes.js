import Home from './Home'
import Checkout from './Checkout'

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