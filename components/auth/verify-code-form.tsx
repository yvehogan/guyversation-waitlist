"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";

export function VerifyCodeForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      router.push("/reset-password");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-8 px-4">
    <div className="space-y-6 max-w-md mx-auto w-full">
      <div className="space-y-2 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center">
          <Image
            src="/icons/Forgot_password.png"
            alt="password icon"
            width={100}
            height={50}
            className="h-10 w-auto"
          />
        </div>
        <h1 className="text-4xl font-semibold">Reset Password</h1>
        <p className="text-grey-400">
          We sent a 5-digit code to
          <span className="font-medium"> movin@gmail.com</span> for verification
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-center py-4">
            <InputOTP 
              maxLength={6} 
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={code}
              onChange={setCode}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isLoading || code.length !== 6}
        >
          {isLoading ? "Verifying..." : "Continue"}
        </Button>
      </form>
    </div>
    </div>
  );
}