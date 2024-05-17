import { Booking } from "../booking/Booking";
import { User } from "../user/User";

export type Student = {
  bookings?: Array<Booking>;
  createdAt: Date;
  enrolledCourses: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
