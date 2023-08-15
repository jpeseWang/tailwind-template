import Hero1 from "./com1/Hero1";
import Hero2 from "./com2/Hero2";
import Hero3 from "./com3/Hero3";
import Hero4 from "./com4/Hero4";
import Hero5 from "./com5/Hero5";
import Hero6 from "./com6/Hero6";
import Hero7 from "./com7/Hero7";
import Hero8 from "./com8/Hero8";
import Hero9 from "./com9/Hero9";
import Hero10 from "./com10/Hero10";
import Hero11 from "./com11/Hero11";
import Hero12 from "./com12/Hero12";
import Hero13 from "./com13/Hero13";
import Hero14 from "./com14/Hero14";
import Hero15 from "./com15/Hero15";
import Hero16 from "./com16/Hero16";
import Hero17 from "./com17/Hero17";
import Hero18 from "./com18/Hero18";
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
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <Hero6 />
            <Hero7 />
            <Hero8 />
            <Hero9 />
            <Hero10 />
            <Hero11 />
            <Hero12 />
            <Hero13 />
            <Hero14 />
            <Hero15 />
            <Hero16 />
            <Hero17 />
            <Hero18 />
          </div>
        </div>
      </div>
    </>
  );
}
