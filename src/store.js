import { configureStore } from '@reduxjs/toolkit'

import occasionsReducer from './features/occasions/occasionsSlice'

export default configureStore({
  reducer: {
    occasions: occasionsReducer,
  },
})