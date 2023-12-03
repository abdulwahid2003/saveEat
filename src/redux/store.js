import {configureStore} from '@reduxjs/toolkit'
import userSlice from './slice'
import { productsApi } from './query'
import { setupListeners } from '@reduxjs/toolkit/query'
const store=configureStore({
reducer:{
    user:userSlice,
    [productsApi.reducerPath]:productsApi.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat([
    productsApi.middleware
]),

})
setupListeners(store.dispatch)

export default store;