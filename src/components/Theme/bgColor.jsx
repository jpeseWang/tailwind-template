"use client";
import { usePathname } from "next/navigation";
export const BackgroundColor = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/about";
  return (
    <>
      {!isHomePage && (
        <div class="absolute inset-x-0 top-0 overflow-hidden pl-[50%]">
          <img
            src="https://tailwindui.com/img/beams-basic.png"
            alt=""
            class="-ml-[39rem] w-[113.125rem] max-w-none"
          />
        </div>
      )}
    </>
  );
};
