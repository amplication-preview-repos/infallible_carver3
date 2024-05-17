import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentWhereInput = {
  bookings?: BookingListRelationFilter;
  enrolledCourses?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
