import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser.js';
import users from './reducers/users.js';
import apiGames from './reducers/apiGames.js';
import loginForm from './reducers/loginForm.js'

const reducer = combineReducers({
  users,
  currentUser,
  loginForm,
  apiGames
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store