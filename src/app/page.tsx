import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="gap flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
