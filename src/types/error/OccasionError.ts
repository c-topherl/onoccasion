export enum OccasionCriticalError {
  GET_OCCASION_FAILURE = "OCCASION:GET_OCCASION_FAILURE",
  GET_OCCASIONS_FAILURE = "OCCASION:GET_OCCASIONS_FAILURE",
}

export const OccasionCriticalErrorValues: Readonly<OccasionCriticalError[]> = Object.freeze(
  Object.values(OccasionCriticalError),
);