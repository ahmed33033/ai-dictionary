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
import { terms } from "@/app/terms";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
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
      </header>
      <p className="text-center text-4xl font-bold bg-linear-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent mbs-4">
        Search the Buzzwords!
      </p>

      <Command className="mbe-4" label="Dictionary Search Bar">
        <CommandInput
          placeholder="Type a command or search..."
          value={searchTerm}
          onValueChange={(search) => setSearchTerm(search)}
          className="h-20"
        />
        <div>
          {searchTerm.length > 0 && (
            <CommandList className="absolute z-1 bg-white">
              <CommandEmpty>No results found.</CommandEmpty>
              {terms.map((term) => (
                <CommandItem key={term}>{term}</CommandItem>
              ))}
            </CommandList>
          )}
        </div>
      </Command>
      <main className="relative">
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
