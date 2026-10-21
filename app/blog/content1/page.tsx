import Link from "next/link";

export default function Content1Page(){
    return(
        <div>
            <h1>Content 1 Page</h1>
            <p>This is the content of the first page in the blog section.</p>
            <p>Use the navigation bar to explore other pages.</p>
            <p>
                Check out the <Link href="/blog">Blog Home</Link> for more posts.
            </p>
        </div>
    )
}