<template>
  <div>
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <NuxtLink to="/">
          <logodark-section />
        </NuxtLink>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Register your Company</h2>
      </div>

      <div class="mt-8">
        <div class="mt-6">
          <form action="#" method="POST" @submit.prevent="nextStep()" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Name of Company
              </label>
              <div class="mt-1">
                <input
                  id="company_name"
                  name="company name"
                  type="text"
                  v-model="company.name"
                  autocomplete="company"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="website" class="block text-sm font-medium text-gray-700">
                Website Link
              </label>
              <div class="mt-1">
                <input
                  id="website"
                  name="website"
                  type="text"
                  v-model="company.website"
                  autocomplete="website"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="location" class="block text-sm font-medium text-gray-700">
                Location of Company
              </label>
              <div class="mt-1">
                <input
                  id="location"
                  name="company location"
                  type="text"
                  v-model="company.location"
                  autocomplete="location"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">
                Description of Company Services
              </label>
              <div class="mt-1">
                <textarea
                  id="description"
                  name="company description"
                  type="text"
                  autocomplete="location"
                  v-model="company.description"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Name of Contact Person
              </label>
              <div class="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  v-model="company.contactName"
                  autocomplete="name"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email of Contact person
              </label>
              <div class="mt-1">
                <input
                  id="company_name"
                  name="company name"
                  type="email"
                  v-model="company.contactEmail"
                  autocomplete="company"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Phone number of Contact person
              </label>
              <div class="mt-1">
                <input
                  id="contact"
                  name="contact person tel"
                  type="tel"
                  v-model="company.contactNumber"
                  autocomplete="contact"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const company = ref({});
const router = useRouter();

const nextStep = () => {
  sessionStorage.setItem("company", JSON.stringify(company.value));
  router.push("/talent_details");
};

onMounted(() => {
  if (!sessionStorage.getItem("company")) return;
  company.value = JSON.parse(sessionStorage.getItem("company"));
});
</script>
