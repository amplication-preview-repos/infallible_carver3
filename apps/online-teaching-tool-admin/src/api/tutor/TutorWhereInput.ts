import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TutorWhereInput = {
  biography?: StringNullableFilter;
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  rating?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
