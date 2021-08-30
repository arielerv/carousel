import {takeLatest, call, put} from 'redux-saga/effects';

import discsService from '../../services/discs';
import {messages} from '../../constants';
import * as actions from './actions';
import * as types from './types';

export function* fetch() {
  try {
    const {discs, message, success} = yield call(discsService.getDiscs);
    if (success) {
      yield put(actions.getDiscsSuccess(discs));
    } else {
      yield put(actions.getDiscsError(message));
    }
  } catch (error) {
    yield put(actions.getDiscsError(messages.INTERNAL_ERROR));
  }
}

export function* discSaga() {
  yield takeLatest(types.GET_DISCS_REQUEST, fetch);
}
