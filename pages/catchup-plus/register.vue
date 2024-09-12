<script setup>
const contact = ref({});
const loading = ref(false);

const periodOptions = [{ name: "One-Off" }, { name: "Monthly" }, { name: "Quarterly" }];

const courseOptions = [
  { name: "Data Analytics" },
  { name: "UX/UI Design" },
  { name: "Social Media Marketing" },
  { name: "Website Development" },
];

const mentor = ref("");
const period = ref("");

const serviceOptions = [
  { name: "Project Review" },
  { name: "Extra Studies" },
  { name: "Job Interview Preparation" },
  { name: "Career Strategy" },
];

const services = ref("");

const successTitle = ref("Registration Successful");
const successText = ref(
  "Thank you for your interest in Catch Up Plus. We will get back to you shortly."
);
const success = ref(false);

async function onSubmit() {
  try {
    loading.value = true;
    const res = await $fetch("https://api.headlessforms.cloud/api/v1/form/tb2ajIDVUc", {
      method: "POST",
      body: {
        ...contact.value,
        service: services.value,
        period: period.value,
        mentor: mentor.value,
      },
    });
    success.value = true;
  } catch (error) {
    console.error(error);
  } finally {
    contact.value = {};
    services.value = "";
    mentor.value = "";
    period.value = "";
    loading.value = false;
  }
}
</script>

<template>
  <div
    class="w-full min-h-screen h-full overflow-auto bg-[url('/images/hiring.jpg')] bg-cover bg-center flex flex-col items-center justify-center md:p-4"
  >
    <div
      v-if="!success"
      class="xl:rounded-3xl max-w-2xl w-full bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
    >
      <a
        href="/"
        class="flex items-center p-2 w-auto w-fit mx-auto rounded-md space-x-2 font-extrabold bg-gray-900"
      >
        <img src="/images/logo.png" class="h-12" alt="" />
      </a>
      <h1 class="text-2xl font-bold my-5">
        Register for <span class="text-pink-500">Catch-up+</span>
      </h1>
      <p class="text-sm text-slate-500 mb-5">
        Catch-up + currently available for Thrive Africa Past Students.
      </p>
      <form action="submit" @submit.prevent="onSubmit()" class="space-y-4">
        <div class="grid gap-1.5">
          <label class="" for="name">Full Name</label>
          <input
            class="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Name"
            v-model="contact.name"
            required
            type="text"
            id="name"
          />
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div class="grid gap-1.5">
            <label class="" for="email">Email Address</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email address"
              v-model="contact.email"
              type="email"
              required
              id="email"
            />
          </div>

          <div class="grid gap-1.5">
            <label class="" for="phone">Phone Number</label>
            <vue-tel-input
              v-model="contact.number"
              placeholder="Enter Whatsapp Number"
              mode="international"
              v-bind="{
                inputOptions: {
                  placeholder: 'Enter your whatsapp number',
                  required: true,
                  styleClasses:
                    ' rounded-sm focus:outline-none border-gray-200 shadow-sm',
                },
              }"
              class="text-sm w-full rounded-lg border-gray-200"
            ></vue-tel-input>
          </div>
          <div class="grid gap-1.5">
            <label class="" for="phone">Whatsapp Number</label>
            <vue-tel-input
              v-model="contact.whatsapp"
              placeholder="Enter Whatsapp Number"
              mode="international"
              v-bind="{
                inputOptions: {
                  placeholder: 'Enter your whatsapp number',
                  required: true,
                  styleClasses:
                    ' rounded-sm focus:outline-none border-gray-200 shadow-sm',
                },
              }"
              class="text-sm w-full rounded-lg border-gray-200"
            ></vue-tel-input>
          </div>
        </div>
        <p class="font-medium text-gray-600">Please select a preferred plan</p>
        <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <div v-for="option in periodOptions" :key="option.name">
            <label
              :for="option.name"
              class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
              tabindex="0"
            >
              <input
                class="sr-only"
                :id="option.name"
                type="radio"
                :value="option.name"
                v-model="period"
              />

              <span class="text-sm"> {{ option.name }} </span>
            </label>
          </div>
        </div>
        <p class="font-medium text-gray-600">Choose a mentor for:</p>
        <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <div v-for="option in courseOptions" :key="option.name">
            <label
              :for="option.name"
              class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
              tabindex="0"
            >
              <input
                class="sr-only"
                :id="option.name"
                type="radio"
                :value="option.name"
                v-model="mentor"
              />

              <span class="text-sm"> {{ option.name }} </span>
            </label>
          </div>
        </div>
        <p class="font-medium text-gray-600">Select your preffered service</p>
        <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <div v-for="option in serviceOptions" :key="option.name">
            <label
              :for="option.name"
              class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
              tabindex="0"
            >
              <input
                class="sr-only"
                :id="option.name"
                type="radio"
                :value="option.name"
                v-model="services"
              />

              <span class="text-sm"> {{ option.name }} </span>
            </label>
          </div>
        </div>
        <div class="mt-4">
          <button
            :disabled="loading"
            class="inline-flex mt-5 items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            {{ loading ? "Submitting..." : "Submit" }}
          </button>
        </div>
      </form>
    </div>
    <Success v-if="success" :title="successTitle" :text="successText">
      <NuxtLink
        to="/"
        class="inline-flex mt-5 items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
      >
        Go to Homepage
      </NuxtLink>
    </Success>
  </div>
</template>
