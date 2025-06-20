import { Address } from "./Address";

export interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  address: Address | null;
  phone: string;
  website: string;
}
