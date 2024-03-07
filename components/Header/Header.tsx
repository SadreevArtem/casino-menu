import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link href={"/"}>Home</Link>
            <Link href={"/games"}>Games</Link>
            <Link href={"/"}>About</Link>
        </header>
    )
}

export { Header };