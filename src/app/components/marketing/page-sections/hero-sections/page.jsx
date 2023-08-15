import Link from "next/link";
import Hero1 from "./com1/Hero1";
import Hero2 from "./com2/Hero2";
export default function Page() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="relative mx-auto mt-2 w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Hero Sections
            </h1>
            <nav
              aria-label="Breadcrumbs"
              className="order-first flex space-x-2 text-sm font-semibold"
            >
              <a
                className="text-slate-500 hover:text-slate-600"
                href="/components#product-marketing"
              >
                Marketing
              </a>
              <div aria-hidden="true" className="select-none text-slate-400">
                /
              </div>
              <a
                className="text-slate-500 hover:text-slate-600"
                href="/components#product-marketing-sections"
              >
                Page Sections
              </a>
            </nav>
          </div>
          <div className="mt-10 space-y-24 pb-px">
            <Hero1 />
            <Hero2 />
          </div>
        </div>
      </div>
    </>
  );
}
