import { BookingUpdateManyWithoutCoursesInput } from "./BookingUpdateManyWithoutCoursesInput";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type CourseUpdateInput = {
  bookings?: BookingUpdateManyWithoutCoursesInput;
  description?: string | null;
  price?: number | null;
  title?: string | null;
  tutor?: TutorWhereUniqueInput | null;
};
