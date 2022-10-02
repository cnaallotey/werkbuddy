<template>
  <div>
    <div class="min-h-screen flex overflow-visible">
      <div
        class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 overflow-y-scroll"
      >
        <slot></slot>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="props.img"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2895&q=100",
  },
});
</script>
