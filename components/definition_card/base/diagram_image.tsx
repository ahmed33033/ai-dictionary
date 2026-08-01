import { diagram } from "@/lib/terms";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function DiagramImage({
  diagram: { src, alt },
  className,
  ...props
}: { diagram: diagram } & React.ComponentProps<"img">) {
  return (
    <Image
      {...props}
      src={`${process.env.NEXT_PUBLIC_BASEPATH}${src}`}
      alt={alt}
      width="300"
      height="300"
      className={cn("w-60 mt-2 ", className)}
    />
  );
}
