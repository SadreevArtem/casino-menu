
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
      <h2>{gameItem?.title}</h2>
      <div>
        <h3>{gameItem?.provider}</h3>
        <ul>
          {gameItem?.categories.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <Image
          src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${gameItem?.identifier}.webp`}
          alt={gameItem?.identifier || ""}
          width={200}
          height={200}
        />
      </div>
    </>
  );
}