export enum OccasionAlert {
  PUT_OCCASION_SUCCESS = "OCCASION:PUT_OCCASION_SUCCESS",
  PUT_OCCASION_FAILURE = "OCCASION:PUT_OCCASION_FAILURE",
}

export const OccasionAlertValues: Readonly<OccasionAlert[]> = Object.freeze(
  Object.values(OccasionAlert),
);