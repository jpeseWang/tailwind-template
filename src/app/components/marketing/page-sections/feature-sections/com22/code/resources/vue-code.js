export default `<template>
<div class="bg-indigo-700">
  <div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
    <h2 class="text-4xl font-bold tracking-tight text-white">Inbox support built for efficiency.</h2>
    <p class="mt-6 max-w-3xl text-lg leading-8 text-indigo-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.</p>
    <div class="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
      <div v-for="feature in features" :key="feature.name">
        <div>
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
            <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" />
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg font-semibold leading-8 text-white">{{ feature.name }}</h3>
          <p class="mt-2 text-base leading-7 text-indigo-200">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import {
ArrowUturnLeftIcon,
ChatBubbleLeftEllipsisIcon,
DocumentChartBarIcon,
HeartIcon,
InboxIcon,
PencilSquareIcon,
TrashIcon,
UsersIcon,
} from '@heroicons/vue/24/outline'

const features = [
{
  name: 'Unlimited Inboxes',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: InboxIcon,
},
{
  name: 'Manage Team Members',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: UsersIcon,
},
{
  name: 'Spam Report',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: TrashIcon,
},
{
  name: 'Compose in Markdown',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: PencilSquareIcon,
},
{
  name: 'Team Reporting',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: DocumentChartBarIcon,
},
{
  name: 'Saved Replies',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: ArrowUturnLeftIcon,
},
{
  name: 'Email Commenting',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: ChatBubbleLeftEllipsisIcon,
},
{
  name: 'Connect with Customers',
  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  icon: HeartIcon,
},
]
</script>`;
