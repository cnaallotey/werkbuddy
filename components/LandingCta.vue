<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl py-12 sm:px-6 sm:py-12 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-12 pb-12 shadow-2xl sm:rounded-xl sm:px-16 md:pt-12 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <svg
          viewBox="0 0 1024 1024"
          class="absolute -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)] right-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
        >
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity.<br />Start using our app today.
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada
            adipiscing sagittis vel nulla.
          </p>
          <div
            class="flex flex-col items-center justify-start mt-8 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <span class="relative inline-flex w-full md:w-auto">
              <NuxtLink
                to="/students/register"
                target="_blank"
                class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-gray-900 bg-white border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Free LinkedIn & CV review
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
