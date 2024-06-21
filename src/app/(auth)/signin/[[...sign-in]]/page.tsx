import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ViCall | Sing in",
  description: "Sign in to ViCall",
};

const SignInPage = async () => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <article className="size-full min-h-screen flex-center px-4">
      <SignIn />
    </article>
  );
};

export default SignInPage;
