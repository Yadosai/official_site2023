<template>
  <section>
    <Hero />
    <Main />
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Main from '@/components/Main'


export default {
  components: {
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

<style lang="scss" scoped></style>
