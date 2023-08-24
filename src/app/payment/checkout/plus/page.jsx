import PaypalButton from "./Paypal";
export default function Checkout() {
  return (
    <>
      <div className="relative flex flex-auto flex-col overflow-hidden lg:flex-row">
        <div className="shrink-0 px-4 lg:order-2 lg:min-w-0 lg:flex-1 lg:px-16 xl:px-20">
          <div className="mx-auto grid max-w-md grid-cols-1 lg:mx-0 lg:max-w-lg">
            <div className="relative py-10 lg:pt-24">
              <div class="absolute inset-y-0 left-1/2 -ml-[55vw] w-[110vw] bg-gradient-to-b from-white/100 shadow-slate-900/5 lg:hidden"></div>
              <div className="relative">
                <a href="#"></a>
                <div class="mt-10 flex space-x-3 lg:mt-0">
                  <h1 class="text-base font-semibold leading-6 text-sky-500">
                    All-access (Without Upgrade)
                  </h1>
                  <span class="rounded-full bg-slate-300/25 px-3 text-xs font-semibold leading-6 text-slate-500">
                    Team license
                  </span>
                </div>
                <div class="mt-4 flex items-center space-x-3">
                  <p class="text-4xl font-bold text-slate-900">$3.00</p>
                  <p class="text-sm font-semibold text-slate-500">
                    monthly payment
                  </p>
                </div>
                <p class="mt-6 text-base leading-7 text-slate-700">
                  Includes access for your team to all 500+ components and
                  templates available in Tailwind UI today, plus all future
                  updates.
                </p>
                <p class="mt-6 text-sm leading-6 text-slate-600">
                  All prices in USD
                </p>
                <div class="mt-4 flex space-x-3 text-sm leading-6">
                  <p class="text-slate-500">
                    Team licenses include 25 seats.{" "}
                    <a
                      class="text-slate-900 hover:underline"
                      href="/all-access"
                    >
                      Learn about licenses for larger teams
                    </a>
                    .
                  </p>
                </div>
                <dl class="mt-16 hidden divide-y divide-slate-900/5 text-base leading-6 text-slate-700 lg:block">
                  <div class="flex justify-between pb-4">
                    <dt>Subtotal</dt>
                    <dd class="font-semibold text-slate-900">$3.00</dd>
                  </div>
                  <div class="flex justify-between py-4">
                    <dt>Taxes</dt>
                    <dd class="text-slate-700">None</dd>
                  </div>
                  <div class="flex justify-between pt-4 font-semibold text-slate-900">
                    <dt>Total price</dt>
                    <dd>$3.00</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full bg-white/60 px-4 pb-28 pt-10 backdrop-blur lg:max-w-[34rem] lg:grow-0 lg:px-16 lg:shadow-2xl xl:px-20">
          <ul class="mt-8 hidden space-x-2 text-sm font-medium leading-6 text-slate-700 lg:flex">
            <li class="flex">
              <a href="/all-access">Packages</a>
              <svg
                aria-hidden="true"
                class="ml-2 h-6 w-6 stroke-slate-500/40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m10.75 8.75 3.5 3.25-3.5 3.25"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </li>
            <li class="flex font-semibold text-sky-500">
              Your details
              <svg
                aria-hidden="true"
                class="ml-2 h-6 w-6 stroke-slate-500/40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m10.75 8.75 3.5 3.25-3.5 3.25"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </li>
            <li class="">Payment</li>
          </ul>
          <section class="mx-auto max-w-md lg:mt-12 lg:max-w-sm ">
            <div>
              <div class="-m-[13px]">
                <div class="paddle-checkout-container">
                  <div>
                    <h2 className="font-semibold text-lg">
                      Please enter your details
                    </h2>
                    <p className="text-sm text-gray-500">
                      We collect this information to help combat fraud, and to
                      keep your payment secure.
                    </p>
                    <div className="my-6">
                      {" "}
                      <label
                        htmlFor="email"
                        className="block text-gray-800 pb-2"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full block rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="my-6">
                      {" "}
                      <label
                        htmlFor="fullName"
                        className="block text-gray-800 pb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        className="w-full block rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <PaypalButton />
                    <div className="ring-1 px-4 py-4 rounded ring-gray-300">
                      <p className="text-xs text-center">
                        This order process is conducted by our online reseller &
                        Merchant of Record, Paddle.com, who also handles
                        order-related inquiries and returns
                      </p>
                      <br></br>
                      <p className="text-xs text-center text-gray-500">
                        Your data will be shared with Tailwind Labs Inc for
                        product fulfillment. Paddle.com Market Ltd, Judd House,
                        18-29 Mora Street, London EC1V 8BT
                      </p>
                      <br></br>
                      <p className="text-xs text-center text-gray-500">
                        <span className="underline">Terms & Conditions</span> |{" "}
                        <span className="underline">Privacy Policy</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
