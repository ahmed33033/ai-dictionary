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
              <div className="inline-block">
                <em className="font-serif">Defining the AI buzzwords, simply.</em>
              </div>
            </div>
          </div>
          <nav className="inline">
            <ol className="*:inline *:not-last:mr-10 text-primary text-lg font-sans underline *:hover:bg-yellow-200 *:p-2 *:rounded-md">
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

      <Command className="my-4 border-2 border-primary" label="Dictionary Search Bar">
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
      <main className="relative">
        <article>
          <h1 className="text-2xl font-bold text-primary">
            <span className="bg-linear-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">Buzzword</span>{" "}
            of the Day
          </h1>
          <h2 className="capitalize">{term_of_the_day}</h2>
          <p>{terms.filter((term) => term.name === term_of_the_day)[0].general.definition}</p>
        </article>
        <Button>A Button</Button>
      </main>
    </>
  );
}
