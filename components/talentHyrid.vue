<template>
  <div>
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <BackButton link="/talent_needs" />
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Hybrid</h2>
      </div>

      <div class="mt-8">
        <div>
          <label for="office location" class="block text-sm font-medium text-gray-700"
            >Office Location</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="office location"
              v-model="talentmode.officeLocation"
              required
              id="office"
              class="shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter office location"
            />
          </div>
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
        <primary-button>Complete Registration</primary-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const talentmode = reactive({
  mode: "Hybrid",
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
onMounted(() => {
  if (sessionStorage.getItem("company") && sessionStorage.getItem("talentInfo")) return;
  router.push("/general_details");
});
</script>

//Intl.supportedValuesOf('timeZone')
