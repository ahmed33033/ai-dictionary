import { diagram } from "@/lib/terms";
import Image from "next/image";

export function DiagramImage({ diagram: { src, alt, width, height } }: { diagram: diagram }) {
  return (
    <Image src={`${process.env.NEXT_PUBLIC_BASEPATH}${src}`} alt={alt} width={width} height={height} className="w-60" />
  );
}
