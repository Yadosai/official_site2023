<template>
  <section>
    <Hero />
    <Jumbotron />
    <Main />
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import Jumbotron from '@/components/Jumbotron'
export default {
  components: {
    Hero,
    Main,
    Jumbotron
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

<style lang="scss" scoped></style>