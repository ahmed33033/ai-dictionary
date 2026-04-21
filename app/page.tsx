"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { termsPlaceholder, terms } from "@/lib/terms";
import { term_of_the_day } from "@/lib/term-of-the-day";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const term_obj = terms.filter((term) => term.name === term_of_the_day)[0];

  return (
    <>
      <header>
        <div className="md:flex text-center md:text-left items-center bg-secondary py-5 px-10 rounded-lg border-primary border-3">
          <div className="inline-block max-md:mbe-3 md:grow-1">
            <div className="inline-block text-center">
              <Link className="text-xl font-sans text-primary inline-block w-m" href={"/"}>
                The Simple <br />
                <span className="text-4xl font-bold">AI Dictionary</span>
              </Link>
              <br />
              <div className="italic inline-block">Defining the AI buzzwords, simply.</div>
            </div>
          </div>
          <nav className="inline">
            <ol className="*:inline *:not-last:mr-10 text-primary font-bold text-lg font-sans *:hover:underline *:decoration-2 *:p-2 *:rounded-md">
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

      <Command className="my-4 border-3 border-primary" label="Dictionary Search Bar">
        <CommandInput
          placeholder="Search through the AI buzz..."
          value={searchTerm}
          onValueChange={(search) => setSearchTerm(search)}
        />
        <div className="relative z-1">
          {searchTerm.length > 0 && (
            <CommandList className="absolute w-full *:*:border-2 *:*:not-last:border-be mbs-1  drop-shadow-2xl/50 drop-shadow-primary">
              <CommandEmpty className="rounded-full  bg-white p-2 ps-4 border-primary">No results found.</CommandEmpty>
              {termsPlaceholder.map((term) => (
                <CommandItem
                  className=" text-primary border-primary bg-white"
                  onSelect={(value) => router.push(`/term/${term}`)}
                  key={term}
                >
                  {term}
                </CommandItem>
              ))}
            </CommandList>
          )}
        </div>
      </Command>
      <main className="flex gap-12 justify-center mbs-4">
        <article>
          <h1 className="px-8 text-2xl font-bold text-primary mb-2 text-center">
            Today's &nbsp;
            <span className="bg-linear-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">Buzzword</span>
          </h1>
          <div className="border-3 border-primary rounded-lg p-4 pt-3 bg-secondary">
            <h2 className="w-max capitalize text-xl font-bold text-red text-primary ">
              <Link className="hover:underline decoration-2  rounded-md box-content" href={`/term/${term_of_the_day}`}>
                {term_of_the_day}
              </Link>
            </h2>
            <p className="capitalize italic ">{term_obj.type}</p>
            <p className="pt-2 max-w-[40ch]">{term_obj.general.definition}</p>
          </div>
        </article>
        <article>
          <h1 className="px-8 text-2xl font-bold text-primary mb-2">
            Discover &nbsp;
            <span className="bg-linear-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">Buzzwords</span>
          </h1>
          <div className="border-3 border-primary rounded-lg p-3 bg-secondary">
            <ul>
              {termsPlaceholder.map((term) => (
                <li className="m-1 my-2 first:my-0 last:my-0" key={term}>
                  <Link
                    className="capitalize text-primary font-bold hover:underline decoration-2   rounded-sm"
                    href={`/term/${term}`}
                  >
                    {term}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
