<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <MobileMenu />

    <Sidebar />

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
          @click="openSidebar"
        >
          <Icon name="hamburger" class="h-6 w-6" />
        </button>

        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <!--<form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>-->
          </div>

          <div class="ml-4 flex items-center md:ml-6">
            <ProfileDropdown />
          </div>
        </div>
      </div>

      <Nuxt />
    </div>
  </div>
</template>

<script>
import ProfileDropdown from '@/components/ProfileDropdown'
import Sidebar from '@/components/Sidebar'
import MobileMenu from '@/components/MobileMenu'
import EventBus from '~/assets/js/event-bus'

export default {
  components: { MobileMenu, Sidebar, ProfileDropdown },
  methods: {
    openSidebar() {
      EventBus.dispatch('open-mobile-menu')
    },
  },
}
</script>
