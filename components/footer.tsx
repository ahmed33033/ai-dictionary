import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-16 flex items-end justify-center grow">
      <div className="flex items-center gap-5">
        <p>The Simple AI Dictionary &copy; 2026</p>
        {/* Using clsx to change url based on basepath */}
        <Link
          href={"https://github.com/ahmed33033/ai-dictionary"}
          target="_blank"
          className={clsx(
            "mask-contain bg-black hover:bg-border size-fit block",
            {
              "mask-[url(/ai-dictionary/GitHub_Invertocat_Black.svg)]":
                process.env.NEXT_PUBLIC_BASEPATH === "/ai-dictionary",
            },
            { "mask-[url(/GitHub_Invertocat_Black.svg)]": process.env.NEXT_PUBLIC_BASEPATH == "" },
          )}
        >
          <Image
            className="w-10 h-auto invisible"
            src={`${process.env.NEXT_PUBLIC_BASEPATH}/GitHub_Invertocat_Black.svg`}
            alt="owo"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </footer>
  );
}
