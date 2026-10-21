import Link from "next/link";

export default function About(){
    return(
        <div>
            <h1>About Page</h1>
            <Welcome name="John"/>
            <p>This is the about page of the website.</p>
        </div>
    );
}

export function Welcome({name = 'Guest'}){
    return <h2>Welcome to the about page, {name}!</h2>;
}