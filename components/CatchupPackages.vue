<script setup>
const program = [
  {
    name: "One-Off Session",
    nature:
      "Book a 30-minute, one-off call with a career mentor for immediate, personalized guidance on any career-related issues. Ideal for addressing urgent concerns or getting quick advice.",
    target: "Students (Senior High School to Undergraduate)",
    duration: "30 minutes for each session",
    link: "/catchup-plus/register",
  },
  {
    name: "Monthly Plan",
    nature:
      "Gain consistent support with 4 sessions per month. Perfect for ongoing career development, interview preparation, or project review, with each session lasting up to 30 minutes.",
    target: "Graduates and Professionals",
    duration: "30 minutes for each session",
    link: "/catchup-plus/register",
  },
  {
    name: "Quarterly Plan",
    nature:
      "Commit to a deeper mentorship experience with 5 sessions per month over a 3-month period. Ideal for those seeking comprehensive career strategy and long-term growth.",
    target: "Youth/Graduates/Students/Professionals",
    duration: "30 minutes for each session",
    link: "/catchup-plus/register",
  },
];
</script>

<template>
  <div class="w-full mt-10 mdd:mt-20 lg:mt-32">
    <div class="max-w-screen-xl mx-auto flex flex-col gap-8 px-4 md:px-10 lg:px-4">
      <h2
        class="max-w-xl mx-auto text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl"
      >
        Packages
      </h2>

      <div class="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8"
        >
          <div
            v-for="item in program"
            :key="item.name"
            class="divide-y divide-gray-200 rounded-2xl border flex flex-col justify-between border-gray-200 shadow-sm"
          >
            <div class="p-6 sm:px-8 flex flex-col justify-between flex-1">
              <div>
                <h2 class="text-2xl font-bold text-gray-900">
                  {{ item.name }}
                </h2>

                <p class="mt-2 text-gray-700">{{ item.nature }}</p>

                <p class="mt-2 hidden sm:mt-4">
                  <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">
                    20$
                  </strong>

                  <span class="text-sm font-medium text-gray-700">/month</span>
                </p>
              </div>

              <div>
                <p class="flex items-center mt-5 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-pink-500 size-6"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M208,96a12,12,0,1,1,12,12A12,12,0,0,1,208,96ZM196,72a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm28.66,56a8,8,0,0,0-8.63,7.31A88.12,88.12,0,1,1,120.66,40,8,8,0,0,0,119.34,24,104.12,104.12,0,1,0,232,136.66,8,8,0,0,0,224.66,128ZM128,56a72,72,0,1,1-72,72A72.08,72.08,0,0,1,128,56Zm-8,72a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H136V80a8,8,0,0,0-16,0Zm40-80a12,12,0,1,0-12-12A12,12,0,0,0,160,48Z"
                    ></path>
                  </svg>

                  <span class="text-gray-700 font-bold"> {{ item.duration }} </span>
                </p>

                <a
                  class="mt-4 block rounded border border-pink-600 bg-pink-600 px-12 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring hover:bg-pink-500 active:text-pink-500 sm:mt-6"
                  :href="item.link"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
