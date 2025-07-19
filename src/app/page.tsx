import { db } from "~/server/db";

export const runtime = "force-dynamic";

const mockUrls = [
  "https://1ct36eswbi.ufs.sh/f/vahpzbX8D2i6wscuzeWnW4LilmZ02Yp1Vo9df7cITySP3HvF",
  "https://1ct36eswbi.ufs.sh/f/vahpzbX8D2i6JCsr26ntIbfzYphG9LZ3Eqv4nHy5QwxdDrkR",
  "https://1ct36eswbi.ufs.sh/f/vahpzbX8D2i6jYyX651bYy6PIjpM2Zn3Ews7DNSgxLrXdFko",
  "https://1ct36eswbi.ufs.sh/f/vahpzbX8D2i6eccGYzjaTs2z6hNMUCcOgxwv43WudDye0XHP"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className="">
      <div className="gap flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
            </div>
          ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
