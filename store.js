import {configureStore} from '@reduxjs/toolkit';
import reducer from './components/redux/reducers/reducer';
export default configureStore({
  reducer: {
    counter: reducer,
  },
});
