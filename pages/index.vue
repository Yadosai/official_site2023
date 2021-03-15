<template>
  <section>
    <Hero />
    <Main />
    <Adcard />
  </section>
</template>

<script>
import Adcard from '@/components/Adcard'
import Hero from '@/components/Hero'
import Main from '@/components/Main'
export default {
  components: {
    Adcard,
    Hero,
    Main
  },
  head() {
    return {
      title: 'トップ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Here is description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/*
.curve-hero{
  position: absolute;
  top: 80vh;
}
*/
</style>
