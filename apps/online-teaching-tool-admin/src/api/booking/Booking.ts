import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type Booking = {
  course?: Course | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
