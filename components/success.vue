<template>
  <div
    class="max-w-2xl w-full bg-white rounded-3xl text-center p-6 md:p-10 flex flex-col items-center gap-5 md:gap-5"
  >
    <h1 class="text-xl md:text-3xl font-bold">{{ title }}</h1>
    <p class="text-gray-600">{{ text }}</p>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
});
</script>
