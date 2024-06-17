import { TLayout } from "@/types/types";
import { ClerkProvider } from "@clerk/nextjs";
import { FC } from "react";

const AuthProvider: FC<TLayout> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/logo.png",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default AuthProvider;
