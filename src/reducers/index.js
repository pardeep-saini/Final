import { combineReducers } from 'redux';
import userLogin from './userLogin/loginReducers';
import getAccountDetails from './getDashBoardAccount/getAccountReducer';
import serachResult from './searchAccount/serachAccount';
import routerDetails from './routerDetails/index';
const rootReducer = combineReducers({
  userLogin,
  getAccountDetails,
  serachResult,
  routerDetails
});

export default rootReducer;