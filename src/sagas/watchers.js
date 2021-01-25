import { takeLatest, takeEvery } from 'redux-saga/effects';
import { userLoginSagas} from  './userLogin/index'
import { getAccount} from  "./getDashBoardAccount/getAccountSagas";
import { getRouterDetails} from  "./getRouterDetails/getRouterSagas";

import * as types from '../actions/userLogin/loginActionConstant';
import * as typesAccountDetails from '../actions/getDashBoardAccount/getAccountNameConstant';
import * as routerDetails from '../actions/routerDetails/routerDetailsConstant';

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_LOGIN, userLoginSagas);
  yield takeLatest(typesAccountDetails.GET_ACCOUNT_DETAILS, getAccount);
  yield takeLatest(routerDetails.GET_ROUTERS_DETAILS, getRouterDetails);
}

