import { BookingCreateNestedManyWithoutCoursesInput } from "./BookingCreateNestedManyWithoutCoursesInput";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type CourseCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCoursesInput;
  description?: string | null;
  price?: number | null;
  title?: string | null;
  tutor?: TutorWhereUniqueInput | null;
};
