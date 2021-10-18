import { AnyAction, Reducer } from "redux";
import {
  EnrollmentActionTypes,
  GetEnrollmentFailureAction,
  GetEnrollmentSuccessAction,
  PutEnrollmentFailureAction,
} from "src/state/actions/EnrollmentActions";
import { EnrollmentAlert } from "src/types/alert/EnrollmentAlert";
import { EnrollmentCriticalError } from "src/types/error/EnrollmentError";
import { EnrollmentStatus } from "src/types/model/Enrollment";
import { defaultEnrollmentState, EnrollmentState } from "src/types/state/EnrollmentState";

export const EnrollmentReducer: Reducer<EnrollmentState> = (
  state: EnrollmentState = defaultEnrollmentState,
  action: AnyAction,
): EnrollmentState => {
  switch (action.type) {
    case EnrollmentActionTypes.GET_ENROLLMENT_SUCCESS: {
      const enrollment: EnrollmentStatus = (action as GetEnrollmentSuccessAction).enrollmentStatus;

      return {
        ...state,
        isLoading: false,
        isEnrolled: enrollment === EnrollmentStatus.ENROLLED,
        alert,
      };
    }

    case EnrollmentActionTypes.GET_ENROLLMENT_FAILURE: {
      const statusCode = (action as GetEnrollmentFailureAction).statusCode;
      return {
        ...state,
        isLoading: false,
        criticalError: EnrollmentCriticalError.GET_ENROLLMENT_FAILURE,
      };
    }

    case EnrollmentActionTypes.PUT_ENROLLMENT_SUCCESS:
      return {
        ...state,
        isEnrolled: true,
        alert: EnrollmentAlert.PUT_ENROLLMENT_SUCCESS,
      };

    case EnrollmentActionTypes.PUT_ENROLLMENT_FAILURE: {
      const statusCode = (action as PutEnrollmentFailureAction).statusCode;
      return {
        ...state,
        alert: EnrollmentAlert.PUT_ENROLLMENT_FAILURE,
      };
    }

    default:
      return state;
  }
};