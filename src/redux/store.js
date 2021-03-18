import { configureStore } from '@reduxjs/toolkit'
import mainfFormReducer from './mainFormSlice'

export default configureStore({
    reducer: {
        errors: mainfFormReducer,

    }
})