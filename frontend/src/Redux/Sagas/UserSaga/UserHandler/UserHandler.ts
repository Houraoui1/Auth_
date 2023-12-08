
import { call, put, takeEvery } from 'redux-saga/effects';

import { loginRequest, loginSuccess, loginFailure } from '../../../Actions/action';
import { LOGIN_REQUEST } from '../../../types/actiontypes';
import { LoginData, Request } from '../UserSaga/UserSaga';

export function* HandleFindEmployee(action: { type: string; payload: LoginData }) {
  try {
    const response: LoginData = yield call(Request, action.payload);

    if (response.data.messagesucces) {
      yield put(loginSuccess());
    } else {
      yield put(loginFailure(response.data.messagefalse));
    }
  } catch (error) {
    console.error(error);

    yield put(loginFailure('An error occurred during login'));
  }
}


export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, HandleFindEmployee);
}