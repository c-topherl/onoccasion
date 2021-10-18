import { OccasionAlert } from "src/types/alert/OccasionAlert";
import { OccasionCriticalError } from "src/types/error/OccasionError";

export interface OccasionState {
  isLoading: boolean;
  occasion?: 
  criticalError?: OccasionCriticalError;
  alert?: OccasionAlert;
}

export const defaultOccasionState: Readonly<OccasionState> = Object.freeze({
  isLoading: true,
});