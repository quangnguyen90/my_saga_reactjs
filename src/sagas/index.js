import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects';
import * as taskType from '../constants/task';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constants';
import {
  addTaskFailed,
  addTaskSuccess,
  deleteTaskFailed,
  deleteTaskSuccess,
  fetchListTask,
  fetchListTaskFail,
  fetchListTaskSuccess,
  updateTaskFailed,
  updateTaskSuccess,
  // filterTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';

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
    // When fetch_task is awaken, code after this line will be implemented
    const action = yield take(taskType.FETCH_TASK);
    console.log('action', action);
    const { params } = action.payload;
    // ============= BLOCK ===================== //
    console.log('Watching fetch list task action');
    yield put(showLoading());
    const resp = yield call(getList, params);
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
  const { keyword } = payload;
  yield put(
    fetchListTask({
      q: keyword,
    }),
  );
  // console.log('Watching Filter Task');
  // const { keyword } = payload;
  // const list = yield select((state) => state.task.listTask);
  // const filteredTask = list.filter((task) =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  // );
  // yield put(filterTaskSuccess(filteredTask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select((state) => state.task.taskEditing);
  yield put(showLoading());
  const resp = yield call(
    updateTask,
    { title, description, status },
    taskEditing.id,
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteTask, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskType.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskType.ADD_TASK, addTaskSaga);
  yield takeLatest(taskType.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskType.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
