import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/blog">blog</Link>
                    </li>
                    <li>
                        <Link href="/member/23">member</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}