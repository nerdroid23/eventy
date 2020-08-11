<template>
  <main
    class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
    tabindex="0"
  >
    <div class="pt-2 pb-6 md:py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">{{ title }}</h1>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
