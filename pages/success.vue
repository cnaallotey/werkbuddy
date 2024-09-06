<script setup>
const successTitle = ref("Registration Successful");
const successText = ref(
  "Thank you for your interest in hiring from Werkbuddy. We will get back to you shortly."
);
</script>

<template>
  <div class="mx-auto w-full h-screen flex flex-col items-center justify-center">
    <div
      class="text-xl font-black leading-none bg-gray-900 px-2 rounded-md select-none logo"
    >
      <img src="/images/logo.png" class="h-[56px] w-auto" alt="logo" />
    </div>
    <Success :title="successTitle" :text="successText">
      <NuxtLink
        to="/"
        class="inline-flex mt-5 items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
      >
        Go to Homepage
      </NuxtLink>
    </Success>
  </div>
</template>
