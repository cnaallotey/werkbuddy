<script setup>
const points = ref([
  "Dedicated solely to your business",
  "Embedded in your company's culture",
  "Graduates (Undergraduate and Master's Degree Holders)",
  "Aligned to your time zone and working hours ",
  "Vetted through sample projects, assessments, and soft skills.",
  "Willing to work remotely, hybridly, or in-person",
]);
</script>

<template>
  <div>
    <div class="py-16 bg-gray-505 overflow-hidden lg:py-0">
      <div class="relative max-w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div
          class="relative mt-0 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center"
        >
          <div class="size-full flex justify-end">
            <div
              class="w-full h-full flex items-center justify-start self-end max-w-[612px] lg:ml-20"
            >
              <div class="relative w-fit">
                <h3
                  class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
                >
                  Werkbuddy at a glance
                </h3>
                <p class="mt-3 text-lg text-gray-500 hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima
                  sequi recusandae, porro maiores officia assumenda aliquam laborum ab
                  aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                  Totam, velit.
                </p>

                <dl class="mt-10 space-y-5 lg:space-y-6">
                  <div v-for="point in points" class="relative">
                    <dt class="flex items-center">
                      <div
                        class="absolute flex items-center justify-center size-8 rounded-md bg-indigo-500 text-white"
                      >
                        <!-- Heroicon name: outline/globe-alt -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-6"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none" />
                          <polyline
                            points="88 136 112 160 168 104"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                          <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                        </svg>
                      </div>
                      <p class="ml-12 text-lg leading-6 font-medium text-gray-900">
                        {{ point }}
                      </p>
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div class="mt-10 -mx-0 relative lg:mt-0" aria-hidden="true">
            <div class="w-full h-full bg-red-50 mx-auto">
              <img
                class="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1644502934571-c9fe89d4cde0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
