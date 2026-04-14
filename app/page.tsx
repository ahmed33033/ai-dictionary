"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import * as defJSONS from "@/app/terms.json";

export default function Home() {
  const [searchVal, setSearchVal] = useState(false);
  const defJSON = defJSONS.definitions;
  return (
    <>
      <header>
        <div className="md:flex text-center md:text-left items-center bg-indigo-200 py-5 px-10 rounded-lg border-main-color border-3">
          <div className="inline-block max-md:mbe-3 md:grow-1">
            <div className="inline-block text-center">
              <Link className="text-xl font-sans text-main-color inline-block w-m" href={"/"}>
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
            <ol className="*:inline *:not-last:mr-10 text-main-color text-lg font-sans underline *:hover:bg-yellow-200 *:p-2 *:rounded-md">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contribute"}>Contribute</Link>
              </li>
            </ol>
          </nav>
        </div>
        <search className="my-5">
          <label
            className="block text-center text-4xl font-black bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2"
            htmlFor="search-dict"
          >
            Name the Buzzword...
          </label>
          <div className="flex justify-center">
            <input
              className="border-main-color border-3 grow-1 placeholder:italic indent-4 rounded-s-lg"
              id="search-dict"
              placeholder="Search..."
              type="search"
            />
            <button className="text-white bg-main-color p-3 px-7 rounded-e-lg">Search</button>
          </div>
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
        <Button>A Button</Button>
      </main>
    </>
  );
}
