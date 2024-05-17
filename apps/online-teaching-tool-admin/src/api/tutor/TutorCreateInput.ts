import { CourseCreateNestedManyWithoutTutorsInput } from "./CourseCreateNestedManyWithoutTutorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TutorCreateInput = {
  biography?: string | null;
  courses?: CourseCreateNestedManyWithoutTutorsInput;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
