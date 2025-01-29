"use client";

import Link from "next/link";
import { signInCredentials } from "@/lib/actions";
import { useActionState } from "react";
import { LoginButton } from "@/components/button";
import { useState } from "react";

const FormLogin = () => {
  const [state, formAction] = useActionState(signInCredentials, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action={formAction} className="space-y-6">
      {state?.error?.message && (
        <div
          className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100"
          role="alert"
        >
          <span className="font-medium">{state.error.message}</span>
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email} // Tetap menyimpan nilai input
          onChange={(e) => setEmail(e.target.value)} // Update state saat diketik
          placeholder="Your Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password} // Tetap menyimpan nilai input
          onChange={(e) => setPassword(e.target.value)} // Update state saat diketik
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>
      <LoginButton />
      <p className="text-sm font-light text-gray-500">
        Don&apos;t have an account yet?{" "}
        <Link href="/register">
          <span className="font-medium pl-1 text-indigo-500 hover:text-indigo-700">
            Sign Up
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
