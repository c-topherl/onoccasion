import { Action } from "redux";
import { EnrollmentStatus } from "src/types/model/Enrollment";

export enum EnrollmentActionTypes {
  GET_ENROLLMENT_REQUEST = "GET_ENROLLMENT_REQUEST",
  GET_ENROLLMENT_SUCCESS = "GET_ENROLLMENT_SUCCESS",
  GET_ENROLLMENT_FAILURE = "GET_ENROLLMENT_FAILURE",
  PUT_ENROLLMENT_REQUEST = "PUT_ENROLLMENT_REQUEST",
  PUT_ENROLLMENT_SUCCESS = "PUT_ENROLLMENT_SUCCESS",
  PUT_ENROLLMENT_FAILURE = "PUT_ENROLLMENT_FAILURE",
}

export interface GetEnrollmentAction extends Action {
  type: EnrollmentActionTypes.GET_ENROLLMENT_REQUEST;
}

export interface GetEnrollmentSuccessAction extends Action {
  type: EnrollmentActionTypes.GET_ENROLLMENT_SUCCESS;
  enrollmentStatus: EnrollmentStatus;
}

export interface GetEnrollmentFailureAction extends Action {
  type: EnrollmentActionTypes.GET_ENROLLMENT_FAILURE;
  statusCode: number | undefined;
  error: string | undefined;
}

export interface PutEnrollmentAction extends Action {
  type: EnrollmentActionTypes.PUT_ENROLLMENT_REQUEST;
}

export interface PutEnrollmentSuccessAction extends Action {
  type: EnrollmentActionTypes.PUT_ENROLLMENT_SUCCESS;
}

export interface PutEnrollmentFailureAction extends Action {
  type: EnrollmentActionTypes.PUT_ENROLLMENT_FAILURE;
  statusCode: number | undefined;
  error: string | undefined;
}

export function getEnrollment(): GetEnrollmentAction {
  return {
    type: EnrollmentActionTypes.GET_ENROLLMENT_REQUEST,
  };
}

export function getEnrollmentSuccess(
  enrollmentStatus: EnrollmentStatus,
): GetEnrollmentSuccessAction {
  return {
    type: EnrollmentActionTypes.GET_ENROLLMENT_SUCCESS,
    enrollmentStatus
  };
}

export function getEnrollmentFailure(
  statusCode: number | undefined,
  error: string | undefined,
): GetEnrollmentAction {
  return {
    type: EnrollmentActionTypes.GET_ENROLLMENT_FAILURE,
    statusCode,
    error,
  };
}

export function putEnrollment(): PutEnrollmentAction {
  return {
    type: EnrollmentActionTypes.PUT_ENROLLMENT_REQUEST,
  };
}

export function putEnrollmentSuccess(
): PutEnrollmentSuccessAction {
  return {
    type: EnrollmentActionTypes.PUT_ENROLLMENT_SUCCESS,
  };
}

export function putEnrollmentFailure(
  statusCode: number | undefined,
  error: string | undefined,
): PutEnrollmentAction {
  return {
    type: EnrollmentActionTypes.PUT_ENROLLMENT_FAILURE,
    statusCode,
    error,
  };
}
