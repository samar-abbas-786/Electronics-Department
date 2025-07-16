import Link from "next/link";
import { LockIcon, Search } from "lucide-react";
import Image from "next/image";

const TopNav = () => {
  const mainLinks = [
    { label: "Admissions", href: "/admissions" },
    { label: "Placements", href: "/placements" },
    { label: "Jobs at AMU", href: "/jobs" },
    { label: "Online-Job Applications", href: "/online-jobs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Centenary Celebration", href: "/centenary" },
    { label: "Screen Reader Access", href: "/screen-reader" },
    { label: "LMS", href: "/lms" },
    { label: "Help", href: "/help" },
  ];

  const utilityLinks = [
    { label: "Site Map", href: "/sitemap" },
    { label: "A", href: "/a" },
    { label: "A+", href: "/a-plus" },
    { label: "A-", href: "/a-minus" },
  ];

  return (
    <div>
      <div className="nav-1 flex flex-col  font-semibold bg-[#D45552] font-sans md:px-10 py-2 space-y-3">
        <nav className=" w-full flex flex-wrap bg-[#D45552] md:text-[14px] text-white gap-2">
          {mainLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`pr-2 ${
                index < mainLinks.length - 1 ? "border-r border-black" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className=" nav-2 w-full r flex flex-wrap  items-center text-[14px] bg-[#D45552] text-white gap-x-4">
          {utilityLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`pr-2  ${
                index < utilityLinks.length - 0 ? "border-r-2 border-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-r-2 border-white">
            <select className=" border-none outline-0  flex flex-coltext-white bg-transparent rounded">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="English">Urdu</option>
            </select>
          </div>

          <Link className="flex items-center gap-1" href="/login">
            <LockIcon size={16} /> Login
          </Link>
        </nav>
      </div>
      <div className="logo w-[100vw] flex justify-around py-2 bg-white items-center">
        <Image
          src="/final-logo-2.png"
          width={230}
          height={68}
          alt="Aligarh Muslim University"
        />
        <Image
          src="/g20.png"
          width={128}
          height={68}
          alt="Aligarh Muslim University"
        />
        <div className="flex gap-5 items-center">
          <input
            placeholder="Enhanced by Google"
            className="w-[220px] h-[33px] text-center rounded-r-full rounded-l-full border-[1px] border-black"
            type="search"
          />
          <Search
            className="bg-[#D45552] rounded-full p-2 text-white font-extrabold"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
