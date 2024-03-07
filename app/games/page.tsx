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


export default async function Games () {
    const data: Games[] = await getData();
    const allPaths: Set<string> = new Set(data.map(el=> el.provider));

  
return(<>
    <h1>Games</h1>
    <div>
      <h2>Providers</h2>
      <ul className="list5b">
        {Array.from(allPaths).map(elem=> <li key={elem}><Link href={`/games/${elem}`}>{elem}</Link></li>)}
      </ul>
    </div>
  </>)
}

