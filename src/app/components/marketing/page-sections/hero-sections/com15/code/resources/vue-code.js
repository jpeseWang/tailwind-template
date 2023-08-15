export default `<template>
<div class="relative overflow-hidden bg-gray-50">
  <div class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true">
    <div class="relative mx-auto h-full max-w-7xl">
      <svg class="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa)" />
      </svg>
      <svg class="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
      </svg>
    </div>
  </div>

  <div class="relative pb-16 pt-6 sm:pb-24">
    <Popover>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div class="flex w-full items-center justify-between md:w-auto">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
          </div>
          <div class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span class="inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50">Log in</a>
            </span>
          </div>
        </nav>
      </div>

      <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="px-2 pb-3 pt-2">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
            </div>
            <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Data to enrich your</span>
          {{ ' ' }}
          <span class="block text-indigo-600 xl:inline">online business</span>
        </h1>
        <p class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg">Get started</a>
          </div>
          <div class="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
            <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg">Live demo</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
{ name: 'Product', href: '#' },
{ name: 'Features', href: '#' },
{ name: 'Marketplace', href: '#' },
{ name: 'Company', href: '#' },
]
</script>`;
