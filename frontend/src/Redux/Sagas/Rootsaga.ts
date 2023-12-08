import { all } from 'redux-saga/effects';
import { watchLogin } from './UserSaga/UserHandler/UserHandler';

function* rootSaga() {
  yield all([
watchLogin(), 
  ]);
}

export default rootSaga;