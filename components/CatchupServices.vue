<script setup>
const countries = [
  {
    id: "job",
    img:
      "https://images.unsplash.com/photo-1653669486925-bb7e9f160343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEpvYiUyMGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Job Interview Preparation",
    desc:
      "Our mentors provide tailored coaching to help you ace your job interviews. From crafting compelling answers to common questions to mastering body language and confidence-building techniques, you'll be fully prepared to make a great impression.",
  },
  {
    id: "gmat",
    img:
      "https://images.unsplash.com/photo-1544819679-57b273c027a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Project Review",
    desc:
      "Get expert feedback on your work and professional projects. Our mentors will guide you through refining your work, ensuring it meets industry standards, and helping you deliver on your projects.",
  },
  {
    id: "article",
    img:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5aW5nJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    text: "Extra Studies",
    desc:
      "Struggling with certain subjects or topics? We offer personalized tutoring and resources to help you excel in your studies, ensuring you stay ahead and fully understand the material.",
  },
  {
    id: "cv",
    img:
      "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Career Strategy",
    desc:
      "Excel in your new career with a clear and actionable career plan with the help of our mentors. From identifying your strengths and setting achievable goals to navigating job markets and making informed career decisions, you'll have the support you need to succeed",
  },
];
</script>

<template>
  <div class="w-full my-20 md:my-32">
    <div class="max-w-screen-xl mx-auto flex flex-col gap-8 px-4 md:px-10 lg:px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap lg:justify-center gap-5"
      >
        <div
          v-for="item in countries"
          class="group relative block h-64 sm:h-80 lg:h-96 w-full lg:w-[calc(25%-32px)]"
        >
          <span class="absolute inset-0 border-2 border-dashed border-pink-600"></span>

          <div
            class="relative flex h-full bg-center bg-cover transform items-end border border-pink-600 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            :style="`background-image: url(${item.img});`"
          >
            <div
              class="absolute inset-0 bg-black opacity-50 group-hover:opacity-80"
            ></div>
            <div
              class="p-4 relative !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
            >
              <InlineSvg
                :src="`/images/icons/${item.id}.svg`"
                class="size-10 text-white"
              />

              <h2 class="mt-4 text-xl text-white font-bold sm:text-2xl">
                {{ item.text }}
              </h2>
            </div>

            <div
              class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
            >
              <h3 class="mt-4 text-xl text-white font-bold sm:text-2xl">
                {{ item.text }}
              </h3>

              <p class="mt-4 text-sm text-white sm:text-base">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
