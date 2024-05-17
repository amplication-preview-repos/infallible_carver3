import { Student } from "../student/Student";
import { Tutor } from "../tutor/Tutor";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  role?: "Option1" | null;
  students?: Array<Student>;
  tutors?: Array<Tutor>;
  updatedAt: Date;
  username: string | null;
};
