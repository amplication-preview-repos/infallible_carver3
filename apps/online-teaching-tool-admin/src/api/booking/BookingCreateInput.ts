import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type BookingCreateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
