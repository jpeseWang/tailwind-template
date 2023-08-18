import Image from "next/image";
export const SpotlightTemplate = () => {
  return (
    <section>
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0">
        <div class="sm:pt-2 md:pr-6 lg:relative lg:ml-auto lg:w-[19.5rem] lg:flex-none lg:pl-8 lg:pr-0">
          <div class="flex items-center gap-2">
            <h2 class="text-base font-semibold text-slate-900">
              <a href="https://tailwindui.com/templates/spotlight">
                <span class="absolute inset-0 lg:left-8"></span>Spotlight
              </a>
            </h2>
          </div>
          <p class="text-sm capitalize leading-6 text-slate-600">
            Personal website template
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            A personal website so nice you’ll actually be inspired to publish on
            it.
          </p>
          <div class="mt-4 h-px w-6 bg-slate-300"></div>
          <a
            href={"https://tailwindui.com/templates/spotlight/download"}
            class="relative mt-4 inline-flex items-center justify-center text-sm font-semibold text-slate-900 hover:text-sky-600"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="mr-2 h-6 w-6 stroke-current"
            >
              <circle cx="12" cy="12" r="9" stroke-width="1.5"></circle>
              <path
                d="M9 12.75L12 15.75M12 15.75L15 12.75M12 15.75L12 8.25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Download
          </a>
        </div>
        <div className="lg:relative lg:mr-auto lg:flex lg:min-w-0 lg:overflow-x-auto">
          <div class="sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-white lg:block"></div>
          <div className="lg:relative lg:flex lg:flex-none lg:items-start lg:pr-8">
            <a
              tabindex="-1"
              class="hidden lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block"
              href="https://tailwindui.com/templates/spotlight"
            >
              <span class="sr-only">View Spotlight template</span>
            </a>
            <Image
              src="https://tailwindui.com/img/templates/spotlight/preview-01.png"
              alt="This is a preview image"
              width="560"
              height="380"
              class="w-full rounded-xl bg-slate-100 lg:w-[19.1666666rem] lg:flex-none"
            ></Image>
            <Image
              src="https://tailwindui.com/img/templates/spotlight/preview-02.png"
              alt="This is a preview image"
              width="560"
              height="380"
              class="w-full rounded-xl bg-slate-100 lg:w-[19.1666666rem] lg:flex-none lg:ml-8 hidden lg:block"
            ></Image>
            <Image
              src="https://tailwindui.com/img/templates/spotlight/preview-03.png"
              alt="This is a preview image"
              width="560"
              height="380"
              class="w-full rounded-xl bg-slate-100 lg:w-[19.1666666rem] lg:flex-none lg:ml-8 hidden lg:block"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
