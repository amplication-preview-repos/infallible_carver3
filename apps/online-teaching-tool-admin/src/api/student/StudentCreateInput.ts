import { BookingCreateNestedManyWithoutStudentsInput } from "./BookingCreateNestedManyWithoutStudentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentCreateInput = {
  bookings?: BookingCreateNestedManyWithoutStudentsInput;
  enrolledCourses?: string | null;
  user?: UserWhereUniqueInput | null;
};
