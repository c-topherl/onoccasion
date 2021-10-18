export enum EnrollmentAlert {
  PUT_ENROLLMENT_SUCCESS = "ENROLLMENT:PUT_ENROLLMENT_SUCCESS",
  PUT_ENROLLMENT_FAILURE = "ENROLLMENT:PUT_ENROLLMENT_FAILURE",
}

export const EnrollmentAlertValues: Readonly<EnrollmentAlert[]> = Object.freeze(
  Object.values(EnrollmentAlert),
);