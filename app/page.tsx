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
  const [animation, setAnimation] = useState("");
  const router = useRouter();
  const term_obj = terms.filter((term) => term.name === term_of_the_day)[0];

  return (
    <>
      <header>
        <div className="md:flex text-center md:text-left items-center bg-secondary py-5 px-10 rounded-lg border-primary border-3">
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

      <Command className="my-4 border-3 border-primary" label="Dictionary Search Bar">
        <CommandInput
          placeholder="Search through the AI buzz..."
          value={searchTerm}
          onValueChange={(search) => setSearchTerm(search)}
        />
        <div className="relative z-1 flex justify-center">
          {searchTerm.length > 0 && (
            <CommandList className="absolute w-[95%]  border-3 border-primary  drop-shadow-2xl/50 drop-shadow-primary">
              <CommandEmpty className="bg-white p-2 ps-4 ">No results found.</CommandEmpty>
              {termsPlaceholder.map((term) => (
                <CommandItem
                  className=" text-primary bg-white border-be-2 border-1"
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
      <main className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center mbs-4">
        <article>
          <h1 className="px-8 text-2xl font-bold text-primary mb-2 text-center">
            Today's &nbsp;
            <span>Buzzword</span>
          </h1>
          <div className="border-3 border-primary rounded-lg p-4 pt-3 bg-secondary">
            <h2 className="w-max capitalize text-xl font-bold text-primary ">
              <Link className="hover:underline decoration-2  rounded-md box-content" href={`/term/${term_of_the_day}`}>
                {term_of_the_day}
              </Link>
            </h2>
            <p className="capitalize italic ">{term_obj.type}</p>
            <p className="pt-2 max-w-[40ch]">{term_obj.general.definition}</p>
          </div>
        </article>
        <article className="min-w-fit flex items-center flex-col">
          <h1 className="text-center px-4 text-2xl font-bold text-primary mb-2">
            Discover &nbsp;
            <span>Buzzwords</span>
          </h1>
          <div className="border-3 border-primary rounded-lg p-2 bg-secondary px-5 basis-36 grow overflow-scroll">
            <ul className="grid grid-cols-2 grid-flow-row px-2 gap-2 gap-x-8 ">
              {termsPlaceholder.slice(0, 12).map((term) => (
                <li className="text-center" key={term}>
                  <Link className="capitalize text-primary  hover:underline decoration-2 " href={`/term/${term}`}>
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
