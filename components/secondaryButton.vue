<template>
  <div>
    <button
      type="button"
      class="inline-flex mt-4 items-center px-4 py-2 space-x-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <slot></slot>
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
