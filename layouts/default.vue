<template>
  <div class="wrap">
    <TopBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
export default {
  components: {
    TopBar,
    Footer
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
}
</style>
