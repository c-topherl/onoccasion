import { call, put, select, takeLatest } from "redux-saga/effects";
import * as os from "src/services/occasionService/occasionServiceApi";
import {
  EnrollmentActionTypes,
  getEnrollment,
  getEnrollmentFailure,
  getEnrollmentSuccess,
  putEnrollmentFailure,
  putEnrollmentSuccess,
} from "src/state/actions/EnrollmentActions";
import { hideModal } from "src/state/actions/ModalActions";
import { EnrollmentRecord, GetEnrollmentResponse } from "src/types/onOccasion/Enrollment";
import { EnrollmentStatus } from "src/types/model/Enrollment";

export const DEFAULT_ENROLLMENT_STATUS = EnrollmentStatus.NOT_ENROLLED;

export function* watchEnrollmentRequests(): Generator {
  yield takeLatest(EnrollmentActionTypes.GET_ENROLLMENT_REQUEST, makeGetEnrollmentRequest);
  yield takeLatest(EnrollmentActionTypes.PUT_ENROLLMENT_REQUEST, makePutEnrollmentRequest);
}

/**
 * Handle the initial application load for multiple set actions or an error, then mark page as loaded
 */
export function* initialAppLoad(): Generator {
  yield put(getEnrollment());
}

/**
 * Requesting enrollment status from OccasionService.
 * Will make the fetch request, then fires completion actions depending on the result.
 */
export function* makeGetEnrollmentRequest(): Generator {
  try {
    const response: GetEnrollmentResponse = (yield call(
      os.getEnrollment,
    )) as GetEnrollmentResponse;

    const enrollmentRecord: EnrollmentRecord | response.body.enrollmentRecord;
    if (!enrollmentRecord) {
      const error = Error(
        `Could not find enrollment record in response [${response}]`,
      );
    }
    yield put(
      getEnrollmentSuccess(
        enrollmentRecord?.enrollmentStatus ?? DEFAULT_ENROLLMENT_STATUS,
      ),
    );
  } catch (error) {
    yield put(getEnrollmentFailure(error?.response?.statusCode, error?.response?.body?.error));
  }
}

/**
 * Requesting enrollment status from OccasionService.
 * Will make the fetch request, then fires completion actions depending on the result.
 */
export function* makePutEnrollmentRequest(): Generator {
  try {
    const putEnrollmentRequest: EnrollmentRecord = {
      enrollmentStatus: EnrollmentStatus.ENROLLED,
    };
    yield call(os.putEnrollment, putEnrollmentRequest);
    yield put(putEnrollmentSuccess());
  } catch (error) {
    yield put(putEnrollmentFailure(error?.response?.statusCode, error?.response?.body?.error));
  }
  yield put(hideModal());
}