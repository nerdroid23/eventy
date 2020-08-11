<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <Nuxt />
    </div>

    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-none"
        src="/register.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>
