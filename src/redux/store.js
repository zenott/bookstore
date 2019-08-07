import { createStore } from 'redux';
import rootReducer from './reducers';
import initialBooks from '../constants/initialBooks';

const initialState = {
  books: initialBooks,
  filter: 'All'
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
