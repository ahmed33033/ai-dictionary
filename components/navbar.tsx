import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="md:flex text-center md:text-left items-center bg-secondary py-5 px-10 rounded-4xl border-border border-1 shadow-md">
        <div className="inline-block max-md:mbe-3 md:grow">
          <div className="inline-block text-center">
            <Link className="text-lg font-sans text-primary inline-block *:-m-1" href={"/"}>
              <p>The Simple</p>
              <p className="text-3xl font-bold">AI Dictionary</p>
            </Link>
            <br />
            <div className="italic text-sm inline-block">Community-driven Software</div>
          </div>
        </div>
        <nav className="inline">
          <ol className="*:inline *:not-last:mr-10 text-primary text-lg font-sans *:hover:underline *:decoration-2 *:p-2 *:rounded-md">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contribute"}>Contribute</Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}
