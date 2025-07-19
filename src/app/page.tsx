import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images () {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => [asc(model.name)]
  });

  return (
  <div className="gap flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2x1 text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>  
        <Images />
      </SignedIn>
    </main>
  );
}
