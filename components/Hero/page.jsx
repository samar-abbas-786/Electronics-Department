import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[200px] font-extrabold">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-0 z-10" />

      {/* Background Image */}
      <Image
        src="/hero.jpeg"
        alt="Hero Image"
        fill
        className="object-cover w-full h-full"
      />

      {/* Text Content */}
      <div className="absolute bottom-12 left-4 z-20 text-white">
        <h1 className="text-[18px] font-bold">Impact 2022</h1>
      </div>

      <div className="absolute bottom-4 left-4 z-20 text-[14px] text-white flex gap-1">
        <Link href="/" className="hover:underline">
          Home /
        </Link>
        <Link href="/" className="hover:underline">
          Miscellaneous /
        </Link>
        <Link href="/" className="hover:underline">
          Special Session Proposal
        </Link>
      </div>
    </div>
  );
};

export default Hero;
