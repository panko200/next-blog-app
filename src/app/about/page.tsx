"use client";
import Image from "next/image";
import { cn } from "cn";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-5 text-2xl font-bold">About</div>
      <div
        className={cn("mx-auto mb-5 w-full md:w-2/3", "flex justify-center")}
      >
        <Image
          src="/images/meIcon.png"
          alt="ブログ運営者のアバター"
          width={350}
          height={350}
          preload
          className="h-auto max-w-full rounded-full border-4 border-slate-500 p-1.5"
        />
      </div>
    </main>
  );
};

export default Page;
