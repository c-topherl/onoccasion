import { EnrollmentAlert } from "src/types/alert/EnrollmentAlert";
import { EnrollmentCriticalError } from "src/types/error/EnrollmentError";

export interface EnrollmentState {
  isLoading: boolean;
  isEnrolled: boolean;
  criticalError?: EnrollmentCriticalError;
  alert?: EnrollmentAlert;
}

export const defaultEnrollmentState: Readonly<EnrollmentState> = Object.freeze({
  isLoading: true,
  isEnrolled: false,
});