<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <Logo />

      <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Create your <span class="text-indigo-500">Eventy</span> account
      </h2>
      <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
        Already have one?
        <NuxtLink
          to="/login"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Sign In
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8">
      <SocialLogins />

      <div class="mt-6">
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
            v-model="form.name"
            label="Name"
            name="name"
            type="text"
            :form="form"
          />

          <InputField
            v-model="form.password"
            label="Password"
            name="password"
            type="password"
            :form="form"
          />

          <InputField
            v-model="form.password_confirmation"
            label="Confirm password"
            name="password_confirmation"
            type="password"
            :form="form"
          />

          <div>
            <span class="block w-full rounded-md shadow-sm">
              <button
                :disabled="form.processing"
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Register
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/InputField'
import SocialLogins from '@/components/SocialLogins'

export default {
  name: 'Register',
  middleware: 'guest',
  components: { SocialLogins, InputField },
  layout: 'auth',
  data() {
    return {
      form: this.$form({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      }),
    }
  },
  methods: {
    submit() {
      this.form
        .post('register')
        .then((response) => this.$router.replace('/login'))
    },
  },
  head: { title: 'Register' },
}
</script>
