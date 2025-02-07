'use client';
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const login = () => {
  return (
    <main className="flex flex-col items-center gap-10">
      <div className="p-20">Login</div>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </main>
  );
};

export default login;

