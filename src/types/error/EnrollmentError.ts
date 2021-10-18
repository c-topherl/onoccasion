export enum EnrollmentCriticalError {
  GET_ENROLLMENT_FAILURE = "ENROLLMENT:GET_ENROLLMENT_FAILURE",
}

export const EnrollmentCriticalErrorValues: Readonly<EnrollmentCriticalError[]> = Object.freeze(
  Object.values(EnrollmentCriticalError),
);