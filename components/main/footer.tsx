import { FOOTER_DATA } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full px-4 pb-8 pt-2 text-gray-200">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-700/40 bg-slate-900/55 backdrop-blur-xl shadow-[0_20px_80px_rgba(2,6,23,0.45)] p-6 md:p-8">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-start justify-around gap-8 flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] text-cyan-300 tracking-wide">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[12px] text-slate-300 hover:text-white transition-colors"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

          <div className="mt-8 pt-6 w-full border-t border-slate-700/40 text-[14px] text-center text-slate-400">
            &copy; Aryan Kumar {new Date().getFullYear()} Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
