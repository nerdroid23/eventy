<template>
  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto"
      >
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
            alt="Workflow"
          />
        </div>

        <div class="mt-5 flex-grow flex flex-col">
          <nav class="flex-1 px-2 bg-white">
            <Link
              to="/"
              class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md hover:text-gray-900 focus:outline-none transition ease-in-out duration-150"
            >
              <Icon
                name="dashboard"
                class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
              />
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Link from '@/components/Link'

export default {
  name: 'Sidebar',
  components: { Link, Icon },
}
</script>
