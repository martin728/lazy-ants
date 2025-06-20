import { Adress } from "./Adress";

export interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  address: Adress | null;
  phone: string;
  website: string;
}
