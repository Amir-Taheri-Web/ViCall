import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
