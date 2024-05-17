import { BookingUpdateManyWithoutStudentsInput } from "./BookingUpdateManyWithoutStudentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentUpdateInput = {
  bookings?: BookingUpdateManyWithoutStudentsInput;
  enrolledCourses?: string | null;
  user?: UserWhereUniqueInput | null;
};
