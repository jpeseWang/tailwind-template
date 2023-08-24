import { StarIcon } from "@heroicons/react/20/solid";
export default function PaymentInfo() {
  return (
    <>
      {" "}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <figure className="mx-auto max-w-2xl">
          <p className="sr-only">5 out of 5 stars</p>
          <div className="flex gap-x-1 text-indigo-600">
            <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          </div>
          <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Qui dolor enim consectetur do et non ex amet culpa sint in ea non
              dolore. Enim minim magna anim id minim eu cillum sunt dolore
              aliquip. Amet elit laborum culpa irure incididunt adipisicing
              culpa amet officia exercitation. Eu non aute velit id velit Lorem
              elit anim pariatur.”
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <img
              className="h-12 w-12 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
              alt=""
            />
            <div className="text-sm leading-6">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <div className="mt-0.5 text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </section>
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <section class="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 xl:grid-cols-4">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900">
            What’s included
          </h2>
          <div class="col-span-3">
            <div class="max-w-[54rem] text-lg leading-8 text-slate-600">
              <p>
                When you purchase an all-access license, you get access to
                everything. Every component example, every production-ready
                website template, and everything we ever add to Tailwind UI in
                the future.
              </p>
              <p class="mt-6">
                There&apos;s no recurring subscription and you never have to pay
                for any updates. You just pay once, and get access to all of our
                premium Tailwind CSS resources forever.
              </p>
            </div>
          </div>
        </section>
        <div className="divide-y divide-slate-700/10 border-t border-slate-700/10">
          <section className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4">
            <h3 class="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
              Components
            </h3>
            <div className="col-span-3">
              <p class="max-w-3xl text-base leading-8 text-slate-700">
                Over 500+ professionally designed, fully responsive, expertly
                crafted component examples you can drop into your Tailwind
                projects and customize to your heart’s content.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200">
                    <img src="https://tailwindui.com/img/all-access-thumbnail-application-ui.png" />
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p class="mt-6 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Application UI
                    </strong>{" "}
                    – Buttons, form controls, application layouts, dialogs, and
                    more.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200">
                    <img src="https://tailwindui.com/img/all-access-thumbnail-marketing.png" />
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p class="mt-6 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Marketing
                    </strong>{" "}
                    – Heros, feature sections, newsletter sign up forms, and
                    more.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200">
                    <img src="https://tailwindui.com/img/all-access-thumbnail-ecomm.png" />
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p class="mt-6 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Ecommerce
                    </strong>{" "}
                    – Checkout forms, shopping carts, product views, and more.
                  </p>
                </div>
              </div>
              <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10">
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      React, Vue, or vanilla HTML
                    </strong>{" "}
                    —{" "}
                    <span>
                      every component includes a functioning example in React
                      and Vue, and an HTML-only version if you want to
                      bring-your-own-JavaScript.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Hundreds of ideas
                    </strong>{" "}
                    —{" "}
                    <span>
                      every category includes a wide variety of UI patterns, so
                      you can always find the perfect starting point for
                      whatever you’re building.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4">
            <h3 class="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
              Templates
            </h3>
            <div className="col-span-3">
              <p class="max-w-3xl text-base leading-8 text-slate-700">
                Visually-stunning, easy to customize website templates built
                with React and Next.js. The perfect starting point for your next
                project and the ultimate resource for learning how experts build
                real websites with Tailwind CSS.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200">
                    <img src="https://tailwindui.com/img/templates/spotlight/preview-01.png" />
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p class="mt-6 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Spotlight
                    </strong>{" "}
                    – A personal website so nice you’ll actually be inspired to
                    publish on it.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200">
                    <img src="https://tailwindui.com/img/templates/syntax/preview-01.png" />
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p class="mt-6 text-slate-700">
                    <strong class="font-semibold text-slate-900">Syntax</strong>{" "}
                    – Educate your users in style with this documentation
                    template.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200">
                    <img src="https://tailwindui.com/img/templates/salient/preview-01.png" />
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p class="mt-6 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Salient
                    </strong>{" "}
                    – A beautiful SaaS landing page to announce your next big
                    idea.
                  </p>
                </div>
              </div>
              <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10">
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Built with Next.js
                    </strong>{" "}
                    —{" "}
                    <span>
                      each template is a well-structured, thoughtfully
                      componentized Next.js project, giving you a codebase
                      that’s productive and enjoyable to work in.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Ready to deploy
                    </strong>{" "}
                    —{" "}
                    <span>
                      every template is production-ready and easily deployed
                      anywhere that you can deploy a Next.js application, like
                      Vercel or Netlify.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="grid grid-cols-1 gap-x-8 gap-y-10 pb-20 pt-10 xl:grid-cols-4">
            <h3 class="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
              Built for production
            </h3>
            <div class="xl:col-span-3">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10">
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Easy to customize
                    </strong>{" "}
                    <span>
                      everything is styled with utility classes, directly in the
                      markup. No configuration variables or complex CSS to
                      wrestle with, just open the markup in your editor and
                      change whatever you want.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Keyboard accessible
                    </strong>{" "}
                    <span>
                      everything we build is keyboard accessible, and we
                      carefully craft the markup to deliver the best
                      screenreader experience we know how.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Built by the Tailwind CSS team
                    </strong>{" "}
                    <span>
                      you can trust that all of the code is written following
                      Tailwind CSS best practices, because it’s written by the
                      same team who created and maintain the framework.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Production-ready
                    </strong>
                    <span>
                      our components and templates are rigorously tested in the
                      latest versions of all browsers, and handle lots of
                      edge-cases you might easily miss yourself.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="grid grid-cols-1 gap-x-8 gap-y-10 pb-20 pt-10 sm:pb-24 lg:pb-32 xl:grid-cols-4">
            <h3 class="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
              Lifetime access
            </h3>
            <div class="xl:col-span-3">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10">
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      No subscription
                    </strong>{" "}
                    <span>
                      all-access licenses are a one-time purchase, we’ll never
                      charge you again after the initial payment.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Unlimited projects
                    </strong>{" "}
                    <span>
                      buy once and use our components and templates for as many
                      projects as you like.
                    </span>
                  </p>
                </div>
                <div>
                  <p class="text-base leading-7 text-slate-700">
                    <strong class="font-semibold text-slate-900">
                      Free updates
                    </strong>{" "}
                    <span>
                      any improvements we make, new components we build, and new
                      templates we design are included with your original
                      purchase.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
