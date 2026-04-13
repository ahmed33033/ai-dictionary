import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <header>
        <div className="md:flex text-center md:text-left items-center bg-indigo-200 py-5 px-10 rounded-lg">
          <div className="inline-block max-md:mbe-3 md:grow-1">
            <div className="inline-block text-center">
              <Link className="text-xl font-sans text-indigo-800 inline-block w-m" href={"/"}>
                The Simple <br />
                <span className="text-4xl font-bold">AI Dictionary</span>
              </Link>
              <br />
              <div className="inline-block">
                <em className="font-serif">Defining the AI buzzwords, simply.</em>
              </div>
            </div>
          </div>
          <nav className="inline">
            <ol className="*:inline *:not-last:mr-10 text-lg font-sans underline *:hover:bg-yellow-200 *:p-2 *:rounded-md">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contribute"}>Contribute</Link>
              </li>
            </ol>
          </nav>
        </div>
        <Field orientation="horizontal" className="my-5 *:h-20 *:text-lg! ">
          <Input type="search" placeholder="Search the buzzwords..." />
          <Button className="w-30"> Search</Button>
        </Field>
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
        <Button>A Button</Button>
      </main>
    </>
  );
}
