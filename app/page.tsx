import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link href={"/"}>The Simple AI Dictionary</Link>
        <p>
          <em>Defining the AI buzzwords, simply.</em>
        </p>
        <nav>
          <ol>
            <li>About</li>
            <li>Contribute</li>
          </ol>
        </nav>
        <search>
          <form action="">
            <label htmlFor="search_bar">Search</label>
            <input id="search_bar" type="search" placeholder="Search the buzzwords!" />
          </form>
        </search>
      </header>

      <main>
        <article>
          <h1>Word of the Day</h1>
          <h2>Agent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur suscipit exercitationem
            aliquam aut nisi tenetur saepe facere ad asperiores eligendi eum itaque distinctio laboriosam repellat dicta
            ex, repellendus consequuntur beatae animi soluta commodi amet qui. Maiores quo debitis officia libero, est
            quisquam accusantium laborum earum numquam, repellat expedita necessitatibus.
          </p>
        </article>
      </main>
    </>
  );
}
