import React, { useState, ReactNode } from 'react';
import { Plan } from '../types/Plan';
import { UserContextData } from '../types/User';

type UserState = {
  user: null | UserContextData;
  setUser: React.Dispatch<React.SetStateAction<null | UserContextData>>
};

type PlanState = {
  selectedPlan: null | Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<null | Plan>>
};

export const UserContext = React.createContext<UserState | undefined>(undefined);
export const PlanContext = React.createContext<PlanState | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<null | UserContextData>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const PlanProvider = ({ children }: ProviderProps) => {
  const [selectedPlan, setSelectedPlan] = useState<null | Plan>(null);
  return <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>{children}</PlanContext.Provider>;
};
