"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      className={className ?? "w-full shad-primary-btn"}
      disabled={isLoading}
      type="submit"
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            className="animate-spin"
            src="/assets/icons/loader.svg"
            alt=""
            height={24}
            width={24}
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
