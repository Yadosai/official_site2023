<template>
  <div class="wrap">
    <TopBar />
    <Nuxt />
    <Adcard />
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Adcard from '@/components/Adcard'
export default {
  components: {
    TopBar,
    Adcard,
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
