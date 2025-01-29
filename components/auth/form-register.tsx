"use client";

import Link from "next/link";
import { signUpCredentials } from "@/lib/actions";
import { useActionState } from "react";
import { RegisterButton } from "@/components/button";
import { useState } from "react";

const FormRegister = () => {
  const [state, formAction] = useActionState(signUpCredentials, null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <span className="text-sm text-red-500 mt-2">{state?.error?.name}</span>
      </div>

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
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <span className="text-sm text-red-500 mt-2">{state?.error?.email}</span>
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
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <span className="text-sm text-red-500 mt-2">
          {state?.error?.password}
        </span>
      </div>

      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="********"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <span className="text-sm text-red-500 mt-2">
          {state?.error?.ConfirmPassword}
        </span>
      </div>

      <RegisterButton />

      <p className="text-sm font-light text-gray-500">
        Already have an account?{" "}
        <Link href="/login">
          <span className="font-medium pl-1 text-indigo-500 hover:text-indigo-700">
            Sign In
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
