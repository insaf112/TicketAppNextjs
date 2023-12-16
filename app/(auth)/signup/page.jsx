"use client";
import React from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const supabase = await createClientComponentClient();
    const { error } = supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`, // Page we will display to user After he verify his email
      },
    });
    if (error) {
      console.log("error : ", error);
    }
    if (!error) {
      router.push("/verify"); // Message page for user to tell him to verify his email
    }
    console.log("SIGNUP : ", email, password);
  };

  return (
    <main>
      <h2 className="text-center">SignUp</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default SignUp;
