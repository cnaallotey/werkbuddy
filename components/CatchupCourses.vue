<script setup>
import {
  PhFileJs,
  PhCodaLogo,
  PhImage,
  PhBrowsers,
  PhSidebar,
  PhFileCsv,
  PhStorefront,
  PhHeadCircuit,
} from "@phosphor-icons/vue";

const courses = [
  {
    icon: PhFileJs,
    name: "Software Engineering",
    color: "text-blue-500 border-blue-500",
  },
  {
    icon: PhCodaLogo,
    name: "Product Management",
    color: "text-rose-500 border-rose-500",
  },
  {
    icon: PhImage,
    name: "Graphic Design",
    color: "text-pink-500 border-pink-500",
  },
  {
    icon: PhSidebar,
    name: "UI/UX Design",
    color: "text-green-500 border-green-500",
  },
  {
    icon: PhBrowsers,
    name: "Website Development",
    color: "text-indigo-500 border-indigo-500",
  },
  {
    icon: PhFileCsv,
    name: "Data Science",
    color: "text-blue-500 border-blue-500",
  },
  {
    icon: PhStorefront,
    name: "Digital Marketing",
    color: "text-amber-500 border-amber-500",
  },
  {
    icon: PhHeadCircuit,
    name: "Machine Learning and AI",
    color: "text-orange-500 border-orange-500",
  },
];
</script>

<template>
  <div class="mt-40">
    <div
      class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10 md:gap-16"
    >
      <h3
        class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center"
      >
        Advance your career in areas such as:
      </h3>
      <div
        class="w-full relative z-10 flex items-center flex-wrap justify-center gap-4 px-4"
      >
        <span
          v-for="item in courses"
          class="whitespace-nowrap rounded-full border-2 px-4 py-2 text-2xl inline-flex items-center justify-center gap-3"
          :class="item.color"
        >
          <span
            ><component :is="item.icon" class="sixe-6 md:size-8" weight="fill"
          /></span>
          <span>{{ item.name }}</span>
        </span>
      </div>
      <p class="text-center max-w-3xl text-slate-500 md:text-xl">
        Our mentors are established professionals skilled with various high paying
        in-demand skills and positioned to help you advance your career.
      </p>
    </div>
  </div>
</template>
