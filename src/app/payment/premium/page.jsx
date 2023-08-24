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
            Get everything, forever.
          </p>
          <p class="mt-4 text-lg text-slate-700">
            Get lifetime access to 500+ components and every template available
            today, plus any new content we add in the future for a simple
            one-time price.
          </p>
        </div>
      </div>
      <div className="relative z-10 bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] py-10 shadow-lg  sm:rounded-3xl sm:px-10 w-1/2 mx-auto mt-6">
        <div class="flex">
          <svg
            class="h-14 w-14 flex-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="21"
              cy="26"
              r="4.25"
              fill="#94A3B8"
              fill-opacity=".2"
              stroke="#94A3B8"
              stroke-width="1.5"
            ></circle>
            <path
              d="M15.318 43.465c-.972-.798-1.374-2.073-1.196-3.318l.03-.207A6.918 6.918 0 0 1 21 34c3.443 0 6.389 2.717 6.875 6.125l.463-4.162a6.704 6.704 0 0 1 13.325 0l.457 4.112c.132 1.19-.26 2.394-1.172 3.169A19.92 19.92 0 0 1 28 48a19.918 19.918 0 0 1-12.682-4.535Z"
              fill="#94A3B8"
              fill-opacity=".2"
            ></path>
            <path
              d="m14.152 39.94.742.106-.742-.106Zm13.723.185-.742.106a.75.75 0 0 0 1.488-.023l-.746-.083Zm.463-4.162-.746-.083.746.083Zm13.325 0 .745-.083-.745.083Zm.457 4.112-.746.083.746-.083Zm-1.172 3.169-.486-.572.486.572Zm-25.63.221-.476.58.476-.58Zm-1.909-3.631-.03.207 1.486.212.03-.207-1.486-.212ZM21 33.25a7.668 7.668 0 0 0-7.59 6.584l1.484.212A6.168 6.168 0 0 1 21 34.75v-1.5Zm7.618 6.769C28.082 36.266 24.84 33.25 21 33.25v1.5c3.046 0 5.695 2.418 6.133 5.481l1.485-.212Zm-1.026-4.139-.462 4.162 1.49.166.463-4.162-1.49-.166ZM35 29.25a7.454 7.454 0 0 0-7.408 6.63l1.491.166A5.954 5.954 0 0 1 35 30.75v-1.5Zm7.408 6.63A7.454 7.454 0 0 0 35 29.25v1.5a5.954 5.954 0 0 1 5.918 5.296l1.49-.166Zm.457 4.112-.457-4.111-1.49.165.456 4.112 1.491-.166Zm-2.403 2.68A19.17 19.17 0 0 1 28 47.25v1.5a20.67 20.67 0 0 0 13.434-4.935l-.972-1.143ZM28 47.25a19.167 19.167 0 0 1-12.206-4.364l-.952 1.159A20.668 20.668 0 0 0 28 48.75v-1.5Zm13.374-7.092c.11.981-.218 1.925-.912 2.514l.972 1.143c1.13-.96 1.587-2.426 1.431-3.823l-1.49.166ZM13.38 40.04c-.209 1.462.257 3.014 1.462 4.004l.952-1.16c-.738-.605-1.076-1.604-.93-2.632l-1.484-.212Z"
              fill="#94A3B8"
            ></path>
            <circle
              cx="34.5"
              cy="21.5"
              r="4.75"
              fill="#94A3B8"
              fill-opacity=".2"
              stroke="#94A3B8"
              stroke-width="1.5"
            ></circle>
            <path
              d="M10.676 38A19.908 19.908 0 0 1 8 28C8 16.954 16.954 8 28 8s20 8.954 20 20c0 3.643-.974 7.058-2.676 10"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
          <div class="ml-4">
            <h2 class="text-base font-semibold leading-7 text-white">
              Premium
            </h2>
            <p class="text-sm leading-6 text-slate-400">
              For product teams and agencies.
            </p>
          </div>
        </div>
        <div class="relative -mx-5 mt-8 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl">
          <p class="flex items-center justify-center">
            <span class="text-[2.5rem] leading-none text-white">
              $<span class="font-bold">49.00</span>
            </span>
            <span class="ml-3 text-sm">
              <span class="font-semibold text-white">one-time payment</span>
              <br></br>
              <span class="text-slate-400">no local taxes</span>
            </span>
          </p>
          <p class="order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-400 sm:space-x-2">
            <span class="hidden sm:inline">Monthly access.</span>
            <span class="hidden sm:inline">Unlimited projects.</span>
            <span class="hidden sm:inline">Free updates.</span>
            <span class="sm:hidden">
              Includes monthly access and free updates.
            </span>
          </p>
          <Link
            class="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-600 text-white hover:bg-slate-500 mt-6 w-full"
            href="/payment/checkout/premium"
          >
            <span>Get all-access for your team</span>
          </Link>
        </div>
        <div class="mt-8 flex">
          <svg
            class="h-8 w-8 flex-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75 21.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-4.5Z"
              fill="#94A3B8"
              fill-opacity=".2"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.75 18.594V17a3.25 3.25 0 0 1 5.327-2.5l.173.156"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <circle cx="9" cy="24" r="1" fill="#94A3B8"></circle>
            <path
              d="M8.75 10.25v-3.5a4 4 0 0 1 4-4h12.5a4 4 0 0 1 4 4v18.5a4 4 0 0 1-4 4h-6.5"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.75 17.75h.27c2.967 0 4.978 2.425 5.995 4.055.51.816.162 1.812-.76 2.216-1.288.563-3.234 1.229-5.234 1.229h-.271"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <circle
              cx="19"
              cy="11"
              r="3.25"
              fill="#94A3B8"
              fill-opacity=".2"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linejoin="round"
            ></circle>
          </svg>
          <div class="ml-6 text-sm leading-6 text-slate-400">
            <p>
              <strong class="font-semibold text-slate-100">
                Get access for your entire team
              </strong>{" "}
              — team licenses include access for up to 25 people to accommodate
              even the largest teams at your company.
            </p>
          </div>
        </div>
        <div class="mt-8 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none"
          >
            <path fill="#none" d="M0 0h32v32H0z"></path>
            <path
              fill="none"
              d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
            ></path>
            <path
              stroke="#94A3B8"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
            ></path>
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="#94A3B8"
              stroke-width="1.5"
            ></circle>
          </svg>
          <div class="ml-6 text-sm leading-6 text-slate-400">
            <p>
              <strong class="font-semibold text-slate-100">
                Lifetime access
              </strong>{" "}
              — get instant access to everything we have today, plus any new
              components and templates we add in the future.
            </p>
          </div>
        </div>
      </div>
      <PaymentInfo />
    </>
  );
}
