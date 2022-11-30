import { takeEvery, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../firebase';
import { getMessagesSuccess, getMessagesFailed } from './messages.reducer';
import { Category } from './messages.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray: Promise<Category[]> = yield call(
      getCategoriesAndDocuments,
      'messages',
    );
    yield put(getMessagesSuccess(categoriesArray));
  } catch (error) {
    yield put(getMessagesFailed(error));
  }
}

function* onFetchCategories() {
  yield takeEvery('messages/getMessagesFetch', fetchCategoriesAsync);
}

export default onFetchCategories;
