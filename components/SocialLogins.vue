<template>
  <div>
    <div>
      <p class="text-sm leading-5 font-medium text-gray-700">
        Sign in with
      </p>

      <!--      <div class="mt-1 grid grid-cols-3 gap-3">-->
      <div class="mt-1">
        <!--<div>
          <span class="w-full inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
              aria-label="Sign in with Twitter"
            >
              <Icon name="twitter" class="w-5 h-5" />
            </button>
          </span>
        </div>-->

        <div>
          <span class="w-full inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
              aria-label="Sign in with Github"
              @click="loginWith('github')"
            >
              <Icon name="github" class="w-5 h-5" />
            </button>
          </span>
        </div>
      </div>
    </div>

    <div class="mt-6 relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-sm leading-5">
        <span class="px-2 bg-white text-gray-500">
          Or continue with
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLogins',
  methods: {
    loginWith(provider) {
      this.$axios
        .$get(`login/${provider}`)
        .then((response) => (window.location = response))
    },
  },
}
</script>
