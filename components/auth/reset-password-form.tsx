"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculatePasswordStrength = (password: string) => {
    // Simple password strength calculation
    if (!password) return 0;

    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 33;

    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 17;
    if (/[0-9]/.test(password)) strength += 17;
    if (/[^A-Za-z0-9]/.test(password)) strength += 33;

    return Math.min(100, strength);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setIsLoading(true);

    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false);
      router.push("/password-success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-8 px-4">
      <div className="space-y-6 max-w-md mx-auto w-full">

    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center">
          <Image
            src="/icons/forgot_password.png"
            alt="Logo"
            width={100}
            height={50}
            className="h-10 w-auto"
          />
        </div>
        <h1 className="text-4xl font-semibold">Set new password</h1>
        <p className="text-grey-400">Must be at least 8 characters</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-14">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={8}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            placeholder="Enter Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1 mt-8 mb-16">
          <div className="flex items-center justify-between mb-2">
            <Label>Password Strength</Label>
          </div>
          <Progress
            value={passwordStrength}
            color="password"
            className="h-2"
          />
        </div>
        <Button
          type="submit"
          size='lg'
          className="w-full"
          disabled={
            isLoading || password.length < 8 || password !== confirmPassword
          }
        >
          {isLoading ? "Processing..." : "Continue"}
        </Button>
      </form>
    </div>
    </div>
    </div>
  );
}
