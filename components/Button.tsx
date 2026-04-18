'use client';

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md";
  className?: string;
  disabled?: boolean;
  form?: string;
};

export function Button({
  children,
  onClick,
  variant = "secondary",
  size = "md",
  className = "",
  disabled = false,
  form
}: ButtonProps) {

  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    ghost: "bg-transparent text-white hover:bg-gray-800",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
  };

  return (
    <button
      onClick={!form ? onClick : undefined}
      disabled={disabled}
      form={form}
      type={form ? "submit" : "button"}
      className={`
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `}
    >
      {children}
    </button>
  );
}