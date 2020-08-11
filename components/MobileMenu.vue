<template>
  <!-- Off-canvas menu for mobile -->
  <div class="md:hidden">
    <div v-if="overlayVisible" class="fixed inset-0 flex z-40">
      <Transition
        appear
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      </Transition>

      <Transition
        appear
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
        @after-leave="overlayVisible = false"
      >
        <div
          v-if="open"
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
        >
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
              @click="open = false"
            >
              <Icon name="x" class="h-6 w-6 text-white" />
            </button>
          </div>

          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
              alt="Workflow"
            />
          </div>

          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <LazyNavLinks />
          </div>
        </div>
      </Transition>

      <!-- Dummy element to force sidebar to shrink to fit close icon -->
      <div class="flex-shrink-0 w-14" />
    </div>
  </div>
</template>

<script>
import EventBus from '~/assets/js/event-bus'

export default {
  name: 'MobileMenu',
  data() {
    return {
      overlayVisible: false,
      open: false,
    }
  },
  mounted() {
    EventBus.listen(
      'open-mobile-menu',
      // eslint-disable-next-line no-return-assign
      () => (this.open = this.overlayVisible = true)
    )
  },
  methods: {
    logout() {
      EventBus.dispatch('logout')
    },
  },
}
</script>
