import { take, put, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import uuid from "uuid";

export function* taskCreationSaga() {
  while (true) {
    //It stops till the particular action is dispatched
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuid();
    //Whatever action we pass to it, it passes it to the store
    yield put(mutations.createTask(taskID, groupID, ownerID));
    console.log("Got group ID", groupID);
  }
}
