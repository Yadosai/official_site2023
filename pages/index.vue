<template>
  <section>
    <Header/>

    <Hero/>
    <Adcard/>
    <Main/>

  </section>
</template>

<script>

import Adcard from '@/components/Adcard';
import Hero from '@/components/Hero';
export default {
  components:{
      Adcard,
      Hero
    }
}
</script>

<style>

</style>
