import { Booking } from "../booking/Booking";
import { Tutor } from "../tutor/Tutor";

export type Course = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  title: string | null;
  tutor?: Tutor | null;
  updatedAt: Date;
};
