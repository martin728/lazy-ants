import { Adress } from "./Adress";

export interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  adress: Adress;
  phone: string;
  website: string;
}
