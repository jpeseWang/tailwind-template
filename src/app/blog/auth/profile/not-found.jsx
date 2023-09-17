import Link from "next/link";

export default function NotFoundUser() {
  return (
    <div className="">
      <main className="relative isolate min-h-full">
        <img
          src="https://images.unsplash.com/photo-1568724275049-e2640b06bb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80"
          alt=""
          className="absolute inset-0 -z-10  w-screen object-cover object-top"
        />
        <div className="mx-auto px-6 py-22 text-center sm:py-32 lg:px-8 h-full ">
          <p className="text-base font-semibold leading-8 text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            User not found
          </h1>
          <p className="mt-4 text-base text-white/70 sm:mt-6">
            Sorry, we couldn’t find the user you’re looking for.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="text-sm font-semibold leading-7 text-white"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
