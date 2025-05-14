"use client";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function ChangePasswordForm() {
  const router = useRouter();
  const [defaultPassword, setDefaultPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-8 px-4">
      <div className="space-y-6 max-w-md mx-auto w-full">
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
          <h1 className="text-4xl font-semibold">Change password?</h1>
          <p className="text-grey-400">
          Please fill the details below to sign into your account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-16">
          <div className="space-y-2">
            <Label htmlFor="defaultPassword">Default Password</Label>
            <Input
              id="defaultPassword"
              placeholder="Enter Password"
              type="password"
              value={defaultPassword}
              onChange={(e) => setDefaultPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">Your New Password</Label>
            <Input
              id="newPassword"
              placeholder="Enter Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              placeholder="Enter Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            size='lg'
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}