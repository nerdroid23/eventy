<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <Logo />

      <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
        Don't have one?
        <NuxtLink
          to="/register"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Sign Up
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8">
      <form
        v-if="form"
        class="space-y-6"
        @submit.prevent="submit"
        @keydown="form.errors.clear($event.target.id)"
      >
        <InputField
          v-model="form.email"
          label="Email Address"
          name="email"
          type="email"
          :form="form"
        />

        <InputField
          v-model="form.password"
          label="Password"
          name="password"
          type="password"
          :form="form"
        />

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              for="remember_me"
              class="ml-2 block text-sm leading-5 text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div class="text-sm leading-5">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <span class="block w-full rounded-md shadow-sm">
            <button
              :disabled="form.processing"
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/InputField'

export default {
  name: 'Login',
  middleware: 'guest',
  components: { InputField },
  layout: 'auth',
  data() {
    return {
      form: null,
    }
  },
  created() {
    this.form = this.$form({
      email: '',
      password: '',
    })
  },
  methods: {
    submit() {
      this.form.post('login').then((response) => {
        this.$cookies.set('token', response)
        this.$router.replace('/')
      })
    },
  },
  head: { title: 'Sign In' },
}
</script>
