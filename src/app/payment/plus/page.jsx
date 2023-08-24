import Link from "next/link";
import PaymentInfo from "../PaymentInfo";
export default function Plus() {
  return (
    <>
      <div class="relative z-20 mx-auto max-w-container px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div class="mx-auto max-w-[45rem] text-center">
          <h1 class="text-base font-semibold leading-7 text-sky-500">
            All-access
          </h1>
          <p class="mt-4 text-5xl font-extrabold leading-[3.5rem] tracking-tight text-slate-900">
            Monthly subscription.
          </p>
          <p class="mt-4 text-lg text-slate-700">
            Get temporary access to 500+ components and every template available
            today, plus any new content we add in the future for a simple
            one-time price.
          </p>
        </div>
      </div>
      <div className="relative bg-white p-5 py-10 sm:rounded-3xl sm:px-10 w-1/2 mx-auto ring-2 mt-6">
        <div class="flex">
          <svg
            class="h-14 w-14 flex-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#0EA5E9"
            stroke-width="1.5"
          >
            <path
              d="M28 33.75c-4.388 0-8.36 2.385-10.627 5.636-1.006 1.443-.428 3.372 1.131 4.187C21.326 45.048 24.771 46 28 46c3.23 0 6.674-.952 9.496-2.427 1.559-.815 2.137-2.744 1.13-4.187C36.36 36.136 32.389 33.75 28 33.75Z"
              fill="#E0F2FE"
            ></path>
            <circle cx="28" cy="24" r="6.25" fill="#E0F2FE"></circle>
            <path
              d="M44.002 38A19.912 19.912 0 0 0 48 26c0-11.046-8.954-20-20-20S8 14.954 8 26c0 4.502 1.488 8.657 3.998 12"
              stroke-linecap="round"
            ></path>
          </svg>
          <div class="ml-4">
            <h2 class="text-base font-semibold leading-7 text-slate-900">
              Plus
            </h2>
            <p class="text-sm leading-6 text-slate-700">
              For individuals working on their next big idea.
            </p>
          </div>
        </div>
        <div class="relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl">
          <div class="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
            <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div class="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
          <div class="relative flex flex-col bg-slate-50 px-5 py-8 sm:rounded-2xl">
            <p class="flex items-center justify-center">
              <span class="text-[2.5rem] leading-none text-slate-900">
                $<span class="font-bold">3.00</span>
              </span>
              <span class="ml-3 text-sm">
                <span class="font-semibold text-slate-900">per month</span>
                <br></br>
                <span class="text-slate-500">no local taxes</span>
              </span>
            </p>
            <p class="order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-500 sm:space-x-2">
              <span class="hidden sm:inline">Lifetime access.</span>
              <span class="hidden sm:inline">Unlimited projects.</span>
              <span class="hidden sm:inline">Free updates.</span>
              <span class="sm:hidden">
                Includes lifetime access and free updates.
              </span>
            </p>
            <Link
              class="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700 mt-6 w-full"
              href="/payment/checkout/plus"
            >
              <span>Get all-access</span>
            </Link>
          </div>
        </div>
        <ul className="mt-8 space-y-8 text-sm leading-6 text-slate-700">
          <li class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              class="h-8 w-8 flex-none"
            >
              <path fill="#fff" d="M0 0h32v32H0z"></path>
              <path
                fill="#E0F2FE"
                d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
              ></path>
              <path
                fill="#0EA5E9"
                d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
              ></path>
            </svg>
            <p class="ml-6">
              <strong class="font-semibold text-slate-900">
                Over 500+ components
              </strong>{" "}
              — everything you need to build beautiful application UIs,
              marketing sites, ecommerce stores, and more.
            </p>
          </li>
          <li class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              class="h-8 w-8 flex-none"
            >
              <path fill="#fff" d="M0 0h32v32H0z"></path>
              <rect
                width="23"
                height="22"
                x="3"
                y="5"
                stroke="#0EA5E9"
                stroke-linejoin="round"
                stroke-width="1.5"
                rx="2"
              ></rect>
              <rect
                width="10"
                height="18"
                x="19"
                y="9"
                fill="#E0F2FE"
                stroke="#0EA5E9"
                stroke-linejoin="round"
                stroke-width="1.5"
                rx="2"
              ></rect>
              <circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
              <circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
              <path stroke="#0EA5E9" stroke-width="1.5" d="M3 11h16"></path>
            </svg>
            <p class="ml-6">
              <strong class="font-semibold text-slate-900">
                Every site template
              </strong>{" "}
              — beautifully designed, expertly crafted website templates built
              with modern technologies like React and Next.js.
            </p>
          </li>
        </ul>
      </div>
      <PaymentInfo />
    </>
  );
}
