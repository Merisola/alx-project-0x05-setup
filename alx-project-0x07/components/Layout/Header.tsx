import Link from "next/link";


const Header: React.FC = () => {
    return (
      <header>
        <div>
          <div>
            <h1>ImageGen</h1>
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    );
}

export default Header;