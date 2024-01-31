export interface IUser {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  photo?: string | null;
  role?: "user" | "administrator" | "owner" | null;
  tokens: { accessToken: string; refreshToken: string; actionToken: string };
}
