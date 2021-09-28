<!-- @format -->

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const storeFactory = () => {
const middlewares = [thunk]
const reduxStore = createStore(
rootReducer,
composeWithDevTools(applyMiddleware(...middlewares))
)

reduxStore.subscribe(() => {
// console.log('subscribe running')
const cart = reduxStore.getState().countryReducer.cart
// console.log('cart', cart)
localStorage.setItem('cart', JSON.stringify(cart))
})

return reduxStore
}

// const reduxStore = createStore(reducer, composeWithDevTools())
// const store = createStore(reducer)

export default storeFactory
