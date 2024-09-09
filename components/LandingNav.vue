<script setup>
const showMenu = ref(false);
</script>

<template>
  <div>
    <section
      class="w-full px-6 pb-12 antialiased bg-gradient-to-t from-pink-400/10 to-transparent"
    >
      <div class="mx-auto max-w-7xl">
        <nav class="relative z-50 h-24 select-none">
          <div
            class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0"
          >
            <div class="flex items-center justify-start md:w-1/4 h-full pr-4">
              <a
                href="/"
                class="flex items-center p-2 rounded-md font-extrabold bg-gray-900"
              >
                <img src="/images/logo.png" class="h-9 shrink-0 md:h-12" alt="" />
              </a>
            </div>
            <div
              class="left-0 fixed top-20 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:top-7 md:flex"
              :class="showMenu ? '!block' : '!hidden lg:!block'"
            >
              <div
                class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
              >
                <div
                  class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"
                >
                  <NuxtLink
                    to="/#review"
                    class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-gray-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                    >Students</NuxtLink
                  >
                  <NuxtLink
                    to="/companies"
                    class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-black lg:mx-3 md:text-center"
                    >Employers</NuxtLink
                  >
                </div>
                <div
                  class="flex px-4 pb-5 flex-col w-full items-start justify-end pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"
                >
                  <NuxtLink
                    to="/catchup-plus"
                    class="w-auto px-6 py-2 mr-0 text-white bg-pink-500 rounded-full md:px-3 md:mr-2 lg:mr-3 md:w-auto"
                    >Catchup Plus+</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div
              @click="showMenu = !showMenu"
              class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 text-gray-700"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                class="w-6 h-6 text-gray-700"
                x-show="showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style="display: none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </nav>

        <!-- Main Hero Content -->
        <div
          class="container max-w-sm py-10 md:py-32 mx-auto mt-px text-left sm:max-w-md md:max-w-lg sm:px-4 md:max-w-none md:text-center"
        >
          <h1
            class="text-3xl font-bold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:text-4xl md:text-7xl lg:text-8xl"
          >
            For students seeking internships or contract work,<br
              class="hidden sm:block"
            />
            and for graduates or professionals looking for full-time positions.
          </h1>
          <!-- <div
            class="mx-auto mt-5 text-gray-400 md:mt-8 md:max-w-lg md:text-center md:text-xl"
          >
            Simplifying the creation of landing pages, blog pages, application pages and
            so much more!
          </div> -->
          <div
            class="flex flex-col items-center justify-center mt-8 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <span class="relative inline-flex w-full md:w-auto">
              <NuxtLink
                to="/#review"
                class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Free LinkedIn Audit & CV Review
              </NuxtLink>
            </span>
            <span class="relative inline-flex w-full md:w-auto">
              <NuxtLink
                to="/catchup-plus"
                target="_blank"
                class="hidden items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-pink-600 bg-pink-100 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                >Catch Up Plus
              </NuxtLink>
            </span>
          </div>
        </div>
        <!-- End Main Hero Content -->
      </div>
    </section>
  </div>
</template>
