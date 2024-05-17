import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { TutorListRelationFilter } from "../tutor/TutorListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: "Option1";
  students?: StudentListRelationFilter;
  tutors?: TutorListRelationFilter;
  username?: StringNullableFilter;
};
