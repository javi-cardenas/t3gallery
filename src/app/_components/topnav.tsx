"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {

  const router = useRouter();

  return (
    <nav className="flex w-fullitems-center justify-between border-b p-4 text-lg font-semibold">
      <div>Gallery</div>
      
      <div className="flex flex-row gap-4">
          <SignedOut>
              <SignInButton />
          </SignedOut>
          <SignedIn>
              <UploadButton 
                endpoint="imageUploader" 
                onClientUploadComplete={() => {
                  router.refresh();
                }}/>
              <UserButton />
          </SignedIn>
      </div>
    </nav>
  );
}