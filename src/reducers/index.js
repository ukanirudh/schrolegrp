import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
import Autentication_Registration from "./authentication_registraction";
import Applicants_Reducer from "./applicants_reducer";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  authenticationAndRegistration: Autentication_Registration,
  applicants: Applicants_Reducer
});

export default rootReducer;