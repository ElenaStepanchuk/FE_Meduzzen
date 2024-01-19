export interface IUser {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  photo?: string;
  role?: "user" | "administrator" | "owner" | null;
}
