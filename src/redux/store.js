import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'

import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store

// Store has all of the default middleware added, _plus_ the logger middleware