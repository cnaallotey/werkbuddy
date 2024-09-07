<template>
  <section id="review" class="flex flex-col gap-10 md:gap-20">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
        >
          <img
            alt="cv-review"
            src="/images/cv-review.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl text-center md:text-left font-bold sm:text-4xl">
            Free LinkedIn Account Audit and CV Review
          </h2>

          <p class="mt-4 text-center md:text-left text-gray-600">
            Elevate your job search with our Free LinkedIn Account Audit and Free CV
            Review services. Whether you're a student gearing up for your first
            internship, a recent graduate seeking your first full-time role, or a
            professional aiming to advance your career, our expert reviews can give you
            the edge you need.
          </p>

          <NuxtLink
            to="/students/register"
            class="inline-flex mt-10 items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Start Now
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="lg:py-24 lg:order-2">
          <h2 class="text-3xl text-center md:text-left font-bold sm:text-4xl">
            Grow your Business with In-Demand and Relevant Skills
          </h2>

          <p class="mt-4 text-center md:text-left text-gray-600">
            No matter your budget, you can explore and expand your business with various
            in-demand skills, including AI and Machine Learning, Data Analytics, Digital
            Marketing, Software Engineering, and Product Management.
          </p>
        </div>
        <div
          class="relative h-64 overflow-hidden rounded-lg lg:order-1 sm:h-80 lg:h-full"
        >
          <img
            alt=""
            src="/images/employee.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
