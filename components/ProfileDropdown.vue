<template>
  <!-- Profile dropdown -->
  <div class="ml-3 relative">
    <div>
      <button
        id="user-menu"
        class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
        aria-label="User menu"
        aria-haspopup="true"
        @click="toggle"
        @keyup.esc="open = false"
      >
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>

    <Transition
      appear
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="open"
        id="profile-dropdown"
        v-click-outside="toggle"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
      >
        <div class="py-1 rounded-md bg-white shadow-xs">
          <NuxtLink
            to="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
          >
            Your Profile
          </NuxtLink>

          <NuxtLink
            to="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
          >
            Settings
          </NuxtLink>

          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
            @click.prevent="logout"
          >
            Sign out
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import EventBus from '~/assets/js/event-bus'

export default {
  name: 'ProfileDropdown',
  data() {
    return {
      open: false,
    }
  },
  mounted() {
    EventBus.listen('logout', () => this.logout())
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    logout() {
      this.$axios.$post('logout').then((response) => {
        this.$store.commit('logout')
        this.$cookies.remove('token')
        this.$router.push('/login')
      })
    },
  },
}
</script>
