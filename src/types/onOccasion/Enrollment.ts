import { EnrollmentStatus } from "src/types/model/Enrollment";

export interface EnrollmentRecord {
  customerId: string;
  enrollmentStatus: EnrollmentStatus;
}

export interface GetEnrollmentResponse {
  statusCode: number;
  body: {
    enrollmentRecord: EnrollmentRecord;
  };
}