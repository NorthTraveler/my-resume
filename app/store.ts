
import stateReducer from '@/actions/redux/statechange';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
export default configureStore({
  reducer: {
    state:stateReducer,
  },
})