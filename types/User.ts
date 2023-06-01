import { Plan } from './Plan';

type User = {
  id: number;
  name: string;
  email: string;
  premuim: number;
};

type RecurrencyOrder = {
  id: number;
  active: boolean;
  interval: number;
  limit: number;
  plans: Plan[];
};

export type UserContextData = {
  recurrencyOrder: RecurrencyOrder;
  user: User;
};
