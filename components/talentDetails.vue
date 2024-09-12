<template>
  <div>
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <BackButton link="/general_details" />

        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Select your talent needs
        </h2>
        <div class="space-y-5 py-5">
          <div
            v-for="(role, index) in roles"
            class="bg-gray-50 pl-5 py-5 font-semibold rounded-lg"
            @click="selectRole(role)"
            :class="
              role === recruitsdetails.role
                ? 'ring-4 ring-indigo-400 text-indigo-500'
                : ''
            "
          >
            {{ role }}
          </div>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2">
        <div class="mt-6 space-y-12"></div>
      </div>
      <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
        How many talents are you willing to recruit?
      </h2>
      <div class="mt-5 w-full">
        <input
          type="range"
          name="number of recruits"
          class="w-full"
          min="1"
          max="10"
          v-model="recruitsdetails.number"
          id=""
        />
      </div>
      <p class="text-lg mt-2 font-semibold text-indigo-600">
        {{ recruitsdetails.number }}
      </p>
      <primary-button @click="nextStep()">Next</primary-button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const recruitsdetails = reactive({ number: 1, role: null });

const roles = [
  "Online Shop Attendant / E-commerce Operations",
  "Social Media Community Manager",
  "Social Media Paid Ads Specialist",
  "Digital Engagement and Customer Service",
  "UI/UX Designer",
  "WordPress Website Developer",
  "Frontend Engineer",
  "Data Analyst",
  "Product Manager",
  "AI and Machine Learning Specialist",
  "Content Writer and SEO Specialist",
];

const selectRole = (x) => {
  recruitsdetails.role = x;
};

const nextStep = () => {
  if (!recruitsdetails.role) return;
  sessionStorage.setItem("talentInfo", JSON.stringify(recruitsdetails));
  router.push("/talent_needs");
};

onMounted(() => {
  if (sessionStorage.getItem("company")) {
    if (!sessionStorage.getItem("talentInfo")) return;
    recruitsdetails.number = JSON.parse(sessionStorage.getItem("talentInfo")).number;
    recruitsdetails.role = JSON.parse(sessionStorage.getItem("talentInfo")).role;
  } else {
    router.push("/general_details");
  }
});
</script>
