
import Image from "next/image";

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

export default async function GameItem ({ params }: {params:{[key: string]: string}}) {
  const data: Games[] = await getData();
  const gameItem = data.find((el) => el.seo_title === params?.seo_title);

  return (
    <>
      <h2>Game - {gameItem?.title}</h2>
      <div className="gameWr">
        <div>
          <h3>Provider - {gameItem?.provider}</h3>
          <div>
            <h4>Categories:</h4>
            {gameItem?.categories.map((el) => (
              <div key={el}>{el}</div>
            ))}
          </div>
        </div>
        <Image
          src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${gameItem?.identifier}.webp`}
          alt={gameItem?.identifier || ""}
          width={250}
          height={250}
        />
      </div>
    </>
  );
}