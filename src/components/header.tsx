import Link from "next/link"
export default function Header (){
    return(
        <div>
            <div className="header">
<ul className="header-button">
    <Link href={"/"}><li>Home</li></Link>
    <Link href={"/about-us"}><li> About us</li></Link>
    <Link href={"/contact-us"}><li>contact us</li></Link>
    <li>jobs</li>
    
</ul>
</div>
        </div>
    )
}