import { ProseH1 } from "@/components/prose/ProseHeaders";
import { ProseP } from "@/components/prose/ProseP";
import Link from "next/link";

export default function Contribute() {
  return (
    <div>
      <ProseH1 className="text-center">How to Contribute?</ProseH1>
      <ProseP className="text-center">
        As an opensource project, the Simple AI Dictionary is always looking for contributors!
      </ProseP>
      <ProseP className="text-center ">Whether that's contributing a new definition, critiquing an existing one or even suggesting some stylistic changes, all valued contributions are welcome through the <Link href="https://github.com/ahmed33033/ai-dictionary" className="underline decoration-2">Github Repository</Link></ProseP>
    </div>
  );
}
