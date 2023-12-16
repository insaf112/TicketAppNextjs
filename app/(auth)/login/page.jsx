"use client";
import React, { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      router.push("/");
    } else {
      setError(error.message);
    }
    console.log("SIGNIN : ", email, password);
  };
  return (
    <main>
      <h2 className="text-center">SignIn</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <p className="error">{error}</p>}
    </main>
  );
};

export default SignIn;
