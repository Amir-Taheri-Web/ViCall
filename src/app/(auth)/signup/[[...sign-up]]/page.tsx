import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ViCall | Sing up",
  description: "Sign up to ViCall",
};

const SignUpPage = async () => {
    const user = await currentUser();

    if (user) redirect("/");

  return (
    <article className="size-full min-h-screen flex-center px-4">
      <SignUp />
    </article>
  );
};

export default SignUpPage;
