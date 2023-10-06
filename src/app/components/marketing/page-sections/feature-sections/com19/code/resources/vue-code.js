export default `<template>
<div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
  <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
    <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
      <defs>
        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg>

    <div class="relative">
      <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">A better way to send money</h2>
      <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.</p>
    </div>

    <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
      <div class="relative">
        <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds world-wide</h3>
        <p class="mt-3 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.</p>

        <dl class="mt-10 space-y-10">
          <div v-for="item in transferFeatures" :key="item.id" class="relative">
            <dt>
              <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ item.name }}</p>
            </dt>
            <dd class="ml-16 mt-2 text-base text-gray-500">{{ item.description }}</dd>
          </div>
        </dl>
      </div>

      <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
        <svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-1.png" alt="" />
      </div>
    </div>

    <svg class="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
      <defs>
        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>

    <div class="relative mt-12 sm:mt-16 lg:mt-24">
      <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
        <div class="lg:col-start-2">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Always in the loop</h3>
          <p class="mt-3 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.</p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in communicationFeatures" :key="item.id" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                  <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ item.name }}</p>
              </dt>
              <dd class="ml-16 mt-2 text-base text-gray-500">{{ item.description }}</dd>
            </div>
          </dl>
        </div>

        <div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
          <svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
              <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
          </svg>
          <img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import {
BoltIcon,
ChatBubbleBottomCenterTextIcon,
EnvelopeIcon,
GlobeAltIcon,
ScaleIcon,
} from '@heroicons/vue/24/outline'

const transferFeatures = [
{
  id: 1,
  name: 'Competitive exchange rates',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: GlobeAltIcon,
},
{
  id: 2,
  name: 'No hidden fees',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: ScaleIcon,
},
{
  id: 3,
  name: 'Transfers are instant',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: BoltIcon,
},
]
const communicationFeatures = [
{
  id: 1,
  name: 'Mobile notifications',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: ChatBubbleBottomCenterTextIcon,
},
{
  id: 2,
  name: 'Reminder emails',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: EnvelopeIcon,
},
]
</script>`;