import { StudentCreateNestedManyWithoutUsersInput } from "./StudentCreateNestedManyWithoutUsersInput";
import { TutorCreateNestedManyWithoutUsersInput } from "./TutorCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
  students?: StudentCreateNestedManyWithoutUsersInput;
  tutors?: TutorCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
