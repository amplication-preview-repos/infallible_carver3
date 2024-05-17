import { StudentUpdateManyWithoutUsersInput } from "./StudentUpdateManyWithoutUsersInput";
import { TutorUpdateManyWithoutUsersInput } from "./TutorUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
  students?: StudentUpdateManyWithoutUsersInput;
  tutors?: TutorUpdateManyWithoutUsersInput;
  username?: string | null;
};
