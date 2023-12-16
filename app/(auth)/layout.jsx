import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();
  console.log("DATA : ", data);
  if (data.session) {
    redirect("/");
  }
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href={"/signup"}>Signup</Link>
        <Link href={"/login"}>Login</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
