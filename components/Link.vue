<template>
  <NuxtLink
    ref="element"
    exact
    :to="to"
    :class="{
      'text-gray-900 bg-gray-100 hover:bg-gray-100 focus:bg-gray-200': isActive,
      'text-gray-600 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50': !isActive,
    }"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.isActive = this.$el.classList.contains('nuxt-link-exact-active')
  },
}
</script>
