<script setup>
const points = ref([
  {
    img: "wallet",
    title: "Set Your Budget",
    description: "Decide how much you are willing to pay for a role.",
  },
  {
    img: "clockuser",
    title: "Choose Your Timezone",
    description: "Schedule according to your preferred time zone.",
  },
  {
    img: "buildingoffice",
    title: "Flexible Work Options",
    description:
      "Hire for remote, hybrid, on-site, internship, NSS, Graduate Trainee, full-time, or contract positions.",
  },
]);
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold tracking-tight text-center">
        Hire on your own terms
      </h2>
      <div
        class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
      >
        <div
          v-for="(point, index) in points"
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <p class="text-[120px] absolute -top-16 -left-0 font-black text-pink-500/10">
            {{ index + 1 }}
          </p>
          <div
            class="p-3 text-white bg-pink-500 rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <img :src="`/images/icons/${point.img}.svg`" class="size-8" />
          </div>
          <h4 class="text-xl font-medium text-gray-700">{{ point.title }}</h4>
          <p class="text-base text-center text-gray-500">
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
