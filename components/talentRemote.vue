<template>
  <div>
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <BackButton link="/talent_needs" />
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Remote</h2>
      </div>

      <form action="submit" @submit.prevent="completeRegistration()" class="mt-8">
        <div>
          <label for="timezone" class="block text-sm font-medium text-gray-700"
            >Select preferred timezone</label
          >
          <select
            id="location"
            name="location"
            required
            v-model="talentmode.timezone"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value=""></option>
            <option
              v-for="timezone in timeZones"
              :key="timezone.index"
              :value="timezone.offset"
            >
              {{ timezone.name }} ({{ timezone.offset }})
            </option>
          </select>
        </div>
        <div class="mt-5">
          <label for="timezone" class="block text-sm font-medium text-gray-700"
            >Is talent required to working in specified timezone?</label
          >
          <select
            id="location"
            name="location"
            v-model="talentmode.timezonePreference"
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
            required
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
import timezone from "@/static/timezone.json";
const timeZones = timezone;

const talentmode = reactive({
  salary: 1000,
  contract: "",
  timezonePreference: "Yes",
  timezone: "",
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
//const salary = ref(1000);

const completeRegistration = () => {
  console.log(talentmode);
  const company = JSON.parse(sessionStorage.getItem("company"));
  const talentInfo = JSON.parse(sessionStorage.getItem("talentInfo"));
  sessionStorage.setItem(
    "completeDetails",
    JSON.stringify({ ...company, ...talentInfo, ...talentmode })
  );
};
</script>

//Intl.supportedValuesOf('timeZone')
