import { Action } from "redux";
import { EnrollmentStatus } from "src/types/model/Enrollment";

export enum OccasionActionTypes {
  GET_OCCASIONS_REQUEST = "GET_OCCASIONS_REQUEST",
  GET_OCCASIONS_SUCCESS = "GET_OCCASIONS_SUCCESS",
  GET_OCCASIONS_FAILURE = "GET_OCCASIONS_FAILURE",
  GET_OCCASION_REQUEST = "GET_OCCASION_REQUEST",
  GET_OCCASION_SUCCESS = "GET_OCCASION_SUCCESS",
  GET_OCCASION_FAILURE = "GET_OCCASION_FAILURE",
  PUT_OCCASION_REQUEST = "PUT_OCCASION_REQUEST",
  PUT_OCCASION_SUCCESS = "PUT_OCCASION_SUCCESS",
  PUT_OCCASION_FAILURE = "PUT_OCCASION_FAILURE",
  DELETE_OCCASION_REQUEST = "DELETE_OCCASION_REQUEST",
  DELETE_OCCASION_SUCCESS = "DELETE_OCCASION_SUCCESS",
  DELETE_OCCASION_FAILURE = "DELETE_OCCASION_FAILURE",
}

export interface GetOccasionsAction extends Action {
  type: OccasionActionTypes.GET_OCCASIONS_REQUEST;
}

export interface GetOccasionsSuccessAction extends Action {
  type: OccasionActionTypes.GET_OCCASIONS_SUCCESS;
  enrollmentStatus: EnrollmentStatus;
}

export interface GetOccasionsFailureAction extends Action {
  type: OccasionActionTypes.GET_OCCASIONS_FAILURE;
  statusCode: number | undefined;
  error: string | undefined;
}

export interface GetOccasionAction extends Action {
  type: OccasionActionTypes.GET_OCCASION_REQUEST;
}

export interface GetOccasionSuccessAction extends Action {
  type: OccasionActionTypes.GET_OCCASION_SUCCESS;
  enrollmentStatus: EnrollmentStatus;
}

export interface GetOccasionFailureAction extends Action {
  type: OccasionActionTypes.GET_OCCASION_FAILURE;
  statusCode: number | undefined;
  error: string | undefined;
}

export interface PutOccasionAction extends Action {
  type: OccasionActionTypes.PUT_OCCASION_REQUEST;
  enrollmentStatus: EnrollmentStatus;
}

export interface PutOccasionSuccessAction extends Action {
  type: OccasionActionTypes.PUT_OCCASION_SUCCESS;
}

export interface PutOccasionFailureAction extends Action {
  type: OccasionActionTypes.PUT_OCCASION_FAILURE;
  statusCode: number | undefined;
  error: string | undefined;
}

export interface DeleteOccasionAction extends Action {
  type: OccasionActionTypes.DELETE_OCCASION_REQUEST;
}

export interface DeleteOccasionSuccessAction extends Action {
  type: OccasionActionTypes.DELETE_OCCASION_SUCCESS;
}

export interface DeleteOccasionFailureAction extends Action {
  type: OccasionActionTypes.DELETE_OCCASION_FAILURE;
  statusCode: number | undefined;
  error: string | undefined;
}

export function getOccasions(): GetOccasionsAction {
  return {
    type: OccasionActionTypes.GET_OCCASIONS_REQUEST,
  };
}

export function getOccasionsSuccess(
): GetOccasionsSuccessAction {
  return {
    type: OccasionActionTypes.GET_OCCASIONS_SUCCESS,
  };
}

export function getOccasionsFailure(
  statusCode: number | undefined,
  error: string | undefined,
): GetOccasionsAction {
  return {
    type: OccasionActionTypes.GET_OCCASIONS_FAILURE,
    statusCode,
    error,
  };
}

export function getOccasion(): GetOccasionAction {
  return {
    type: OccasionActionTypes.GET_OCCASION_REQUEST,
  };
}

export function getOccasionSuccess(
): GetOccasionSuccessAction {
  return {
    type: OccasionActionTypes.GET_OCCASION_SUCCESS,
  };
}

export function getOccasionFailure(
  statusCode: number | undefined,
  error: string | undefined,
): GetOccasionAction {
  return {
    type: OccasionActionTypes.GET_OCCASION_FAILURE,
    statusCode,
    error,
  };
}

export function putOccasion(): PutOccasionAction {
  return {
    type: OccasionActionTypes.PUT_OCCASION_REQUEST,
  };
}

export function putOccasionSuccess(
  enrollmentStatus: EnrollmentStatus,
): PutOccasionSuccessAction {
  return {
    type: OccasionActionTypes.PUT_OCCASION_SUCCESS,
  };
}

export function putOccasionFailure(
  statusCode: number | undefined,
  error: string | undefined,
): PutOccasionAction {
  return {
    type: OccasionActionTypes.PUT_OCCASION_DETAILS_FAILURE,
    statusCode,
    error,
  };
}

export function deleteOccasion(): DeleteOccasionAction {
  return {
    type: OccasionActionTypes.DELETE_OCCASION_REQUEST,
  };
}

export function deleteOccasionSuccess(
): DeleteOccasionSuccessAction {
  return {
    type: OccasionActionTypes.DELETE_OCCASION_SUCCESS,
  };
}

export function deleteOccasionFailure(
  statusCode: number | undefined,
  error: string | undefined,
): DeleteOccasionAction {
  return {
    type: OccasionActionTypes.DELETE_OCCASION_DETAILS_FAILURE,
    statusCode,
    error,
  };
}