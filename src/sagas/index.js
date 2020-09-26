import { fork, take, call, put } from 'redux-saga/effects';
import * as taskType from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';
import { fetchListTaskFail, fetchListTaskSuccess } from '../actions/task';

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
function* watFetchListTaskAction() {
  while (true) {
    yield take(taskType.FETCH_TASK);
    // ============= BLOCK ===================== //
    console.log('Watching fetch list task action');
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
  }
}

function* watchCreateTaskAction() {
  console.log('Watching create task action');
}

function* rootSaga() {
  yield fork(watFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
