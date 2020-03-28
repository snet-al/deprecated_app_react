import { takeEvery } from 'redux-saga/effects';

function* logger(action) {
  yield console.log(action);
}

export default function* watchActions() {
  yield takeEvery('*', logger);
}
