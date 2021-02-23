<template>
  <section>
    <Header/>
    <BezierSvg1 />
    <Hero/>
    <Adcard/>
    <Main/>
    <BezierSvg2 />
  </section>
</template>

<script>

import BezierSvg1 from '@/static/images/Curve.svg'
import BezierSvg2 from '@/static/images/Curve2.svg'
import Adcard from '@/components/Adcard';
import Hero from '@/components/Hero';
export default {
  components: {
    BezierSvg1,
    BezierSvg2,
    Adcard,
    Hero
  }
</script>

<style>

</style>
