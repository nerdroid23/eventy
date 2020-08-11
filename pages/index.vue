<template>
  <ContentSection title="Dashboard">
    <div>
      <Logo />

      <h1 class="title">
        eventy-front
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </ContentSection>
</template>

<script>
import ContentSection from '@/components/ContentSection'

export default {
  components: { ContentSection },
  middleware: 'auth',
}
</script>
