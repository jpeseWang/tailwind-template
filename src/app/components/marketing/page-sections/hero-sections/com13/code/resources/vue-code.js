export default `<template>
<div class="bg-white">
  <header>
    <Popover class="relative bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:justify-start md:space-x-10 lg:px-8">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
              <span>Solutions</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
          <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
        </div>
      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pb-6 pt-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white">
                      <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">{{ item.name }}</div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6">
              <div class="grid grid-cols-2 gap-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">{{ item.name }}</a>
              </div>
              <div class="mt-6">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-gray-900">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>

  <main>
    <div>
      <!-- Hero card -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
              <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
            </div>
            <div class="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
              <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Take control of your</span>
                <span class="block text-indigo-200">customer support</span>
              </h1>
              <p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get started</a>
                  <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Live demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p class="text-center text-base font-semibold text-gray-500">Trusted by over 5 very average small businesses</p>
          <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
            </div>
            <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More main page content here... -->
  </main>
</div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
Bars3Icon,
ChatBubbleBottomCenterTextIcon,
ChatBubbleLeftRightIcon,
InboxIcon,
QuestionMarkCircleIcon,
XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const solutions = [
{
  name: 'Inbox',
  description: 'Get a better understanding of where your traffic is coming from.',
  href: '#',
  icon: InboxIcon,
},
{
  name: 'Messaging',
  description: 'Speak directly to your customers in a more meaningful way.',
  href: '#',
  icon: ChatBubbleBottomCenterTextIcon,
},
{
  name: 'Live Chat',
  description: "Your customers' data will be safe and secure.",
  href: '#',
  icon: ChatBubbleLeftRightIcon,
},
{
  name: 'Knowledge Base',
  description: "Connect with third-party tools that you're already using.",
  href: '#',
  icon: QuestionMarkCircleIcon,
},
]
const navigation = [
{ name: 'Pricing', href: '#' },
{ name: 'Partners', href: '#' },
{ name: 'Company', href: '#' },
]
</script>`;
