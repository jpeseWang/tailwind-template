export default `<template>
<div class="bg-white py-20 sm:py-24 lg:py-32">
  <div class="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">A better way to send money.</h2>
    <dl class="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
      <div v-for="feature in features" :key="feature.name">
        <dt>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
            <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
          </div>
          <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ feature.name }}</p>
        </dt>
        <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
      </div>
    </dl>
  </div>
</div>
</template>

<script setup>
import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/vue/24/outline'

const features = [
{
  name: 'Competitive exchange rates',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: GlobeAltIcon,
},
{
  name: 'No hidden fees',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: ScaleIcon,
},
{
  name: 'Transfers are instant',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: BoltIcon,
},
]
</script>`;
