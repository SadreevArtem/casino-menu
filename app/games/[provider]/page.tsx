
import Link from "next/link";

async function getData() {
    const response = await fetch("https://nextjs-test-pi-hazel-56.vercel.app/data/games.json");
    return response.json();
}
export async function generateStaticParams() {
    const games: Games[] = await getData();
    return games.map((game)=>({
      slug: game.seo_title,
    }))
  }


export default async function Providers ({ params }: {params:{[key: string]: string}}) {
  const data: Games[] = await getData();
  const allPaths: Set<string> = new Set(data.map((el) => el.categories).flat());

  return (<>
      <h2>Games</h2>
      <div>
        <h2>Categories</h2>
        <ul>
          {Array.from(allPaths).map((elem) => (
            <li key={elem}>
              <Link href={`/games/${params?.provider}/${elem}`}>{elem}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
