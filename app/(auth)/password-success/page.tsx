import Link from "next/link";
import Image from "next/image";
import { PasswordSuccessContent } from "@/components/auth/password-success-content";

export default function PasswordSuccessPage() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-1 flex-col p-8">
        <header className="flex items-center justify-between">
          <Image
            src="/svgs/logo.svg"
            alt="Logo"
            width={100}
            height={50}
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-100">
              Didn&apos;t get an email?
            </span>
            <Link
              href="/verify-code"
              className="inline-flex h-9 items-center justify-center rounded-full border border-primary-400 px-4 py-2 text-sm text-primary-400 hover:bg-primary-400/10"
            >
              Resend Mail
            </Link>
          </div>
        </header>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <PasswordSuccessContent />
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 bg-primary- lg:block p-6">
        <div className=" bg-primary-200 rounded-tr-[45px] rounded-bl-[45px]">
          <Image
            src="/svgs/onboarding.svg"
            alt="Hero Image"
            width={500}
            height={500}
            className=" w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
