import { Course } from "../course/Course";
import { User } from "../user/User";

export type Tutor = {
  biography: string | null;
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
