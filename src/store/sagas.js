import {all} from 'redux-saga/effects';

import {discSaga} from './discs/saga';

export default function* rootSaga() {
  yield all([discSaga()]);
}
