"use client";
import Link from "next/link";
import { termsPlaceholder } from "@/lib/terms";
import { term_of_the_day } from "@/lib/term-of-the-day";
import { SimpleCard } from "@/components/definition_card/simple_card";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center ">
        <article className="grow">
          <h1 className="px-8 text-2xl text-primary mb-2 text-center font-playfair-display ">
            Today's &nbsp;
            <span>Buzzword</span>
          </h1>
          <SimpleCard term={term_of_the_day} />
        </article>
        <article className="min-w-fit flex items-center flex-col">
          <h1 className="text-center px-4 text-2xl text-primary mb-2 font-playfair-display">Discover</h1>
          <Card className="border-1 border-border p-4 bg-secondary px-5 basis-48 overflow-scroll">
            <ul className="list-none grid grid-cols-2 grid-flow-row px-2 gap-2 gap-x-8 ">
              {termsPlaceholder.slice(0, 12).map((term) => (
                <li className="text-center" key={term}>
                  <Link className="capitalize text-primary  hover:underline decoration-2 " href={`/term/${term}`}>
                    {term}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </article>
      </main>
    </>
  );
}
