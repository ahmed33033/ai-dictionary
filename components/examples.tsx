import { cn } from "@/lib/utils";

export function Examples({
  className,
  example_list,
  ...props
}: React.ComponentProps<"ul"> & { example_list: Array<string> }) {
  return (
    <ul className={cn(className, "list-disc list-inside mt-4 ml-4")} {...props}>
      {example_list.map((example) => (
        <li className="mb-2" key={example}>
          {example}
        </li>
      ))}
    </ul>
  );
}
