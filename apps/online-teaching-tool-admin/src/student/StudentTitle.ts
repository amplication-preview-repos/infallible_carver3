import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "enrolledCourses";

export const StudentTitle = (record: TStudent): string => {
  return record.enrolledCourses?.toString() || String(record.id);
};
