"use client";

import { UserResponse } from "@/schemas/user";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type UserContextValue = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export default function UserProvider({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser: UserResponse | null;
}) {
  const [user, setUser] = useState<UserResponse | null>(initialUser);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
