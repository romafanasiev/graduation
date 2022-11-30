import { all } from 'redux-saga/effects';
import onFetchCategories from './messages/messages.saga';

export default function* rootSaga() {
  yield all([onFetchCategories()]);
}
