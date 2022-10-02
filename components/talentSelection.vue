<template>
  <div>
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <BackButton link="/talent_details" />
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Select your preferred working mode
        </h2>
      </div>

      <div class="mt-8">
        <div class="mt-6 space-y-12">
          <NuxtLink v-for="(menuitem, index) in menu" :to="menuitem.url">
            <div
              class="max-w-sm border border-gray-200 rounded-[20px] mt-8 overflow-hidden hover:shadow-lg hover:shadow-indigo-50 hover:ring-2 hover:ring-indigo-400"
            >
              <div class="w-full h-[120px]">
                <img
                  :src="menuitem.img"
                  class="w-full h-full object-center object-cover"
                  :alt="menuitem.name"
                />
              </div>
              <div class="p-4 flex justify-between items-center font-semibold">
                {{ menuitem.name }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const menu = [
  {
    name: "Remote",
    url: "talent_needs/talent/remote",
    img:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  },
  {
    name: "In-person",
    url: "talent_needs/talent/in-person",
    img:
      "https://images.unsplash.com/photo-1594098882270-66ce9399b040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZXRpbmclMjBibGFja3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Hybrid",
    url: "talent_needs/talent/hybrid",
    img:
      "https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
  },
];

onMounted(() => {
  if (sessionStorage.getItem("company") && sessionStorage.getItem("talentInfo")) return;
  router.push("/general_details");
});
</script>
