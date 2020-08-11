<template>
  <nav class="px-2 space-y-1">
    <Link
      to="/"
      class="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md hover:text-gray-900 focus:outline-none transition ease-in-out duration-150"
    >
      <Icon
        name="dashboard"
        class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
      />
      Dashboard
    </Link>
  </nav>
</template>

<script>
import Link from '@/components/Link'

export default {
  name: 'NavLinks',
  components: { Link },
}
</script>
