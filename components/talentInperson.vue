<template>
  <div>
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <BackButton link="/talent_needs" />
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">In-person</h2>
      </div>

      <form action="submit" @submit.prevent="completeRegistration()" class="mt-8">
        <div>
          <label for="office location" class="block text-sm font-medium text-gray-700"
            >Office Location</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="office location"
              id="office"
              required
              class="shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter office location"
              v-model="talentmode.officeLocation"
            />
          </div>
        </div>
        <div class="mt-5 hidden">
          <label for="timezone" class="block text-sm font-medium text-gray-700"
            >Is talent required to working in required timezone?</label
          >
          <select
            id="location"
            name="location"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option v-for="option in options" :key="option.index" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="mt-5">
          <label for="contract" class="block text-sm font-medium text-gray-700"
            >Do you require talent for a full-time or part-time contract?</label
          >
          <select
            id="contract"
            name="contract"
            required
            v-model="talentmode.contract"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option></option>
            <option
              v-for="option in workOptions"
              :key="option.index"
              :value="option.choice"
            >
              {{ option.caption }}
            </option>
          </select>
        </div>
        <div class="mt-5">
          <label for="contract" class="block text-sm font-medium text-gray-700"
            >Please Set your salary Range</label
          >
          <input
            type="range"
            name="salary"
            class="w-full"
            min="1000"
            max="10000"
            step="50"
            id="salary"
            v-model="talentmode.salary"
          />
          <p>USD {{ talentmode.salary }}</p>
        </div>
        <primary-button type="submit">Complete Registration</primary-button>
      </form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const talentmode = reactive({
  mode: "In-person",
  salary: 1000,
  contract: "",
  officeLocation: "",
});

const options = ["Yes", "No"];
const workOptions = [
  {
    caption: "Yes (Full-time, 40 hours a week)",
    choice: "Yes",
  },
  {
    caption: "No (Part-time, 20 hours a week)",
    choice: "No",
  },
];

const completeRegistration = async () => {
  console.log(talentmode);
  const company = JSON.parse(sessionStorage.getItem("company"));
  const talentInfo = JSON.parse(sessionStorage.getItem("talentInfo"));
  sessionStorage.setItem(
    "completeDetails",
    JSON.stringify({ ...company, ...talentInfo, ...talentmode })
  );
  try {
    const res = await $fetch("https://api.headlessforms.cloud/api/v1/form/lYL5OID7c9", {
      method: "POST",
      body: {
        ...company,
        ...talentInfo,
        ...talentmode,
      },
    });
    await navigateTo("/success");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  if (sessionStorage.getItem("company") && sessionStorage.getItem("talentInfo")) return;
  router.push("/general_details");
});
</script>

//Intl.supportedValuesOf('timeZone')
