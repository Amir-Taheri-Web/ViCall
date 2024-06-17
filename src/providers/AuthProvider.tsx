import { TLayout } from "@/types/types";
import { ClerkProvider } from "@clerk/nextjs";
import { FC } from "react";

const AuthProvider: FC<TLayout> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default AuthProvider;
