import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  // takeEvery,
} from 'redux-saga/effects';
import * as taskType from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';
import {
  fetchListTaskFail,
  fetchListTaskSuccess,
  filterTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';

/**
 * Step1: Implement action fetch task
 * Step2: Call API
 * Step2.1: Show Loading Bar
 * Step3: Check status code
 *        + if Success: fetch list task success
 *        + if Fail: fetch list task fail
 * Step4: Shutdown Loading
 * Step5: Implement other processes
 */
function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskType.FETCH_TASK);
    // ============= BLOCK ===================== //
    console.log('Watching fetch list task action');
    yield put(showLoading());
    const resp = yield call(getList);
    // ============= BLOCK until Call done ===================== //
    console.log('resp', resp);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      // dispatch action fetchListTaskFail
      yield put(fetchListTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  console.log('Watching Filter Task');
  const { keyword } = payload;
  const list = yield select((state) => state.task.listTask);
  const filteredTask = list.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  );
  yield put(filterTaskSuccess(filteredTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskType.FILTER_TASK, filterTaskSaga);
  // yield takeEvery(taskType.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
