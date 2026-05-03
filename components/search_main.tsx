"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { termsPlaceholder } from "@/lib/terms";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useRef } from "react";

export function MainSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string | undefined>("");
  return (
    <div className="my-4 mbe-6 border-1 border-border rounded-full shadow-md">
      <Combobox
        items={termsPlaceholder}
        autoHighlight
        openOnInputClick={false}
        limit={5}
        inputValue={inputValue}
        onInputValueChange={(inputValue, e) => setInputValue(inputValue)}
      >
        <ComboboxInput
          ref={inputRef}
          placeholder="Search the buzz..."
          showTrigger={false}
          showClear
          className="bg-white"
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem
                key={item}
                value={item}
                onClick={(e) => {
                  router.push(`/term/${item}`);
                  inputRef.current?.blur();
                }}
                className="cursor-pointer"
              >
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
