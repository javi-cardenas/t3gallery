import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    return (
      <nav className="flex w-fullitems-center justify-between border-b p-4 text-lg font-semibold">
        <div>Gallery</div>
        
        <div className="flex flex-row gap-4">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
}