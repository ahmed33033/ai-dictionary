import { diagram } from "@/lib/terms";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export function DiagramImage({ diagram: { src, alt, width, height }, className, ...props}: { diagram: diagram} & React.ComponentProps<"img">) {
  return (
    <Image src={`${process.env.NEXT_PUBLIC_BASEPATH}${src}`} alt={alt} width={width} height={height} className={cn("w-60 mt-2 ", className)} />
  );
}
