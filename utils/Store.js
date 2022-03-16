import Cookies from 'js-cookie'
import { createContext, useReducer } from 'react'

export const Store = createContext()
const initialState = {
  filter: { categories: 'all', price: '', search: '' },
  product: [],
  user: [],

  compareCartItems: Cookies.get('compareCartItems')
    ? JSON.parse(Cookies.get('compareCartItems'))
    : [],

  wishListItems: Cookies.get('wishListItems')
    ? JSON.parse(Cookies.get('wishListItems'))
    : [],

  cart: {
    cartItems: Cookies.get('cartItems')
      ? JSON.parse(Cookies.get('cartItems'))
      : [],
    shippingAddress: Cookies.get('shippingAddress')
      ? JSON.parse(Cookies.get('shippingAddress'))
      : {},
    paymentMethod: Cookies.get('paymentMethod')
      ? Cookies.get('paymentMethod')
      : '',
  },

  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
}
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload

      return { ...state, product: newItem }
    }

    case 'ADD_USER': {
      const newItem = action.payload

      return { ...state, user: newItem }
    }

    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      Cookies.set('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      )
      Cookies.set('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }

    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      }

    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      }
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } }
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload }
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: '',
        },
      }
    case 'SAVE_FILTER_CATEGORY':
      return {
        ...state,
        filter: { ...state.filter, categories: action.payload },
      }

    case 'SAVE_FILTER_SEARCH':
      return {
        ...state,
        filter: { ...state.filter, search: action.payload },
      }
    case 'COMPARE_CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.compareCartItems.find(
        (item) => item._id === newItem._id
      )
      const compareCartItems = existItem
        ? state.compareCartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.compareCartItems, newItem]
      Cookies.set('compareCartItems', JSON.stringify(compareCartItems))
      return { ...state, compareCartItems }
    }
    case 'COMPARE_CART_REMOVE_ITEM': {
      const compareCartItems = state.compareCartItems.filter(
        (item) => item._id !== action.payload._id
      )
      Cookies.set('compareCartItems', JSON.stringify(compareCartItems))
      return { ...state, compareCartItems }
    }

    case 'COMPARE_CART_CLEAR':
      return { ...state, compareCartItems: [] }

    case 'WISH_LIST_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.wishListItems.find(
        (item) => item._id === newItem._id
      )
      const wishListItems = existItem
        ? state.wishListItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.wishListItems, newItem]
      Cookies.set('wishListItems', JSON.stringify(wishListItems))
      return { ...state, wishListItems }
    }

    case 'WISH_LIST_REMOVE_ITEM': {
      const wishListItems = state.wishListItems.filter(
        (item) => item._id !== action.payload._id
      )
      Cookies.set('wishListItems', JSON.stringify(wishListItems))
      return { ...state, wishListItems }
    }

    case 'WISH_LIST_CLEAR':
      return { ...state, wishListItems: [] }
    default:
      return state
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
