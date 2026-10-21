import Link from "next/link";

export default function BlogPage(){
    return(
        <div>
            <h1>Welcome to the Blog Page!</h1>
            <p>This is where you can find all the lastest blog posts.</p>
            <p>Use the navbar to explore other section of the site.</p>
            <p>
                Check out the <Link href="/">Home</Link> page for more information.
            </p>
        </div>
    )
}