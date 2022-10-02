<template>
  <div>
    <NuxtLink
      :to="props.link"
      class="inline-flex items-center px-4 py-2 space-x-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg> </span
      ><span>Back</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    default: "/",
  },
});
</script>
