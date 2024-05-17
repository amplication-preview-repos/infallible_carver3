import { CourseUpdateManyWithoutTutorsInput } from "./CourseUpdateManyWithoutTutorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TutorUpdateInput = {
  biography?: string | null;
  courses?: CourseUpdateManyWithoutTutorsInput;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
