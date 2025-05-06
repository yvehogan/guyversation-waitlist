"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PasswordSuccessContent() {
  const router = useRouter();

  return (
    <div className="space-y-6 text-center">
      <div className="mx-auto inline-flex items-center justify-center">
        <Image
          src="/icons/password_created.png"
          alt="Logo"
          width={100}
          height={100}
          className=" w-auto"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">Password Created</h1>
        <p className="text-grey-400">
          Your password has now been reset
        </p>
      </div>
      <Button
        onClick={() => router.push("/")}
        size="lg"
        className="w-full"
      >
        Back to Login
      </Button>
    </div>
  );
}
