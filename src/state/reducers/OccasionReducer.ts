import { AnyAction, Reducer } from "redux";
import {
  OccasionActionTypes,
  GetOccasionFailureAction,
  GetOccasionSuccessAction,
  GetOccasionsFailureAction,
  GetOccasionsSuccessAction,
  PutOccasionFailureAction,
  DeleteOccasionFailureAction
} from "src/state/actions/OccasionActions";
import { OccasionCriticalError } from "src/types/error/OccasionError";
import { defaultOccasionState, OccasionState } from "src/types/state/OccasionState";

export const OccasionReducer: Reducer<OccasionState> = (
  state: OccasionState = defaultOccasionState,
  action: AnyAction,
): OccasionState => {
  switch (action.type) {
    case OccasionActionTypes.GET_OCCASION_SUCCESS: {
      const Occasion: OccasionStatus = (action as GetOccasionSuccessAction).OccasionStatus;

      return {
        ...state,
        isLoading: false,
        criticalError,
        isEnrolled: Occasion === OccasionStatus.ENROLLED,
        alert,
      };
    }

    case OccasionActionTypes.GET_OCCASION_FAILURE: {
      const statusCode = (action as GetOccasionFailureAction).statusCode;
      return {
        ...state,
        isLoading: false,
        criticalError: OccasionCriticalError.GET_OCCASIONS_FAILURE,
      };
    }

    case OccasionActionTypes.GET_OCCASIONS_SUCCESS: {
      const Occasion: OccasionStatus = (action as GetOccasionsSuccessAction).OccasionStatus;

      return {
        ...state,
        isLoading: false,
        criticalError,
        isEnrolled: Occasion === OccasionStatus.ENROLLED,
        alert,
      };
    }

    case OccasionActionTypes.GET_OCCASIONS_FAILURE: {
      const statusCode = (action as GetOccasionsFailureAction).statusCode;
      return {
        ...state,
        isLoading: false,
        criticalError: OccasionCriticalError.GET_OCCASIONS_FAILURE,
      };
    }

    case OccasionActionTypes.PUT_OCCASION_SUCCESS:
      return {
        ...state,
        isEnrolled: true,
        alert: OccasionAlert.PUT_OCCASION_SUCCESS,
      };

    case OccasionActionTypes.PUT_OCCASION_FAILURE: {
      const statusCode = (action as PutOccasionFailureAction).statusCode;
      return {
        ...state,
        alert: OccasionAlert.PUT_OCCASION_FAILURE,
      };
    }

    default:
      return state;
  }
};