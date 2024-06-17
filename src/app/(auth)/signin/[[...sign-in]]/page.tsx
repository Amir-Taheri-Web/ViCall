import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
