import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
