<template>
  <div>
    <TopBar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
export default {
  components: {
    TopBar,
    Footer
  }
}
</script>