<script setup>
const contact = ref({});

const service = ref([]);

const loading = ref(false);
const successTitle = ref("Registration Successful");
const successText = ref(
  "Thank you for your interest in a CV review or LinkedIn audit. We will get back to you shortly."
);
const success = ref(false);
async function onSubmit() {
  try {
    loading.value = true;
    const res = await $fetch("https://getform.io/f/bpjmrvob", {
      method: "POST",
      body: { ...contact.value, service: service.value },
    });
    success.value = true;
  } catch (error) {
    console.error(error);
  } finally {
    contact.value = {};
    service.value = [];
    loading.value = false;
  }
}
</script>

<template>
  <div class="w-full min-h-screen bg-slate-900 flex flex-col">
    <div class="h-full flex">
      <div
        class="w-full bg-[url('/images/meeting.jpg')] bg-center bg-cover h-[100vh] p-4 flex items-center justify-center"
      >
        <div
          v-if="!success"
          class="rounded-3xl max-w-2xl w-full bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
        >
          <a
            href="/"
            class="flex items-center p-2 w-auto w-fit mx-auto rounded-md space-x-2 font-extrabold bg-gray-900"
          >
            <img src="/images/logo.png" class="h-12" alt="" />
          </a>
          <h1 class="text-3xl font-bold mb-10">Register</h1>
          <form action="submit" @submit.prevent="onSubmit()" class="space-y-4">
            <div class="grid gap-1.5">
              <label class="" for="name">Full Name</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                v-model="contact.name"
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
            <p class="font-medium text-gray-600">Please select a service</p>
            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
              <div>
                <label
                  for="linkedin-review"
                  class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabindex="0"
                >
                  <input
                    class="sr-only"
                    id="linkedin-review"
                    type="checkbox"
                    value="Linkedin Review"
                    v-model="service"
                  />

                  <span class="text-sm"> LinkedIn Account Audit </span>
                </label>
              </div>

              <div>
                <label
                  for="cv-review"
                  class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabindex="0"
                >
                  <input
                    class="sr-only"
                    id="cv-review"
                    type="checkbox"
                    value="CV Review"
                    v-model="service"
                  />

                  <span class="text-sm"> CV Review </span>
                </label>
              </div>
            </div>
            <p class="text-sm">
              To sustain our operations, non-students of Thrive will be required to pay a
              token fee of <b>100 Cedis</b> (or the equivalent amount in your country’s
              currency) to access the LinkedIn and CV review services.
            </p>
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
    </div>
  </div>
</template>
