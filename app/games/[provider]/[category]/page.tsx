
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


export default async function ChooseGames ({ params }: {params:{[key: string]: string}}) {
  const data: Games[] = await getData();
  const allPaths: Set<string> = new Set(data.filter((elem)=> elem.categories.includes(params?.category as string)).map(el=>el.seo_title));

  return (
    <>
      <h2>Games</h2>
      <div>
        <h2>Categories</h2>
        <ul>
          {Array.from(allPaths).map((elem) => (
            <li key={elem}>
              <Link href={`/games/${params?.provider}/${params?.category}/${elem}`}>{elem}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}