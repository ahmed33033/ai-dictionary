"use client";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { termsPlaceholder } from "@/lib/terms";

export function MainSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <Command className="my-4 border-1 border-border shadow-md shadow-border" label="Dictionary Search Bar">
      <CommandInput
        placeholder="Search through the AI buzz..."
        value={searchTerm}
        onValueChange={(search) => setSearchTerm(search)}
      />
      <div className="relative z-1 flex justify-center">
        {searchTerm.length > 0 && (
          <CommandList className="absolute w-[95%]  border-1 border-border  drop-shadow-2xl drop-shadow-primary/50 mbs-0.5">
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
  );
}
