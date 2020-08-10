<template>
  <div>
    <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
      {{ label }}
    </label>

    <div class="mt-1 rounded-md shadow-sm">
      <input
        :id="name"
        :value="value"
        :type="type"
        required
        :class="{
          'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': form.errors.has(
            name
          ),
        }"
        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        @input="$emit('input', $event.target.value)"
      />
    </div>

    <p
      v-if="form.errors.has(name)"
      class="mt-2 text-sm text-red-600"
      v-text="form.getError(name)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: ['form', 'label', 'name', 'type', 'value'],
}
</script>
