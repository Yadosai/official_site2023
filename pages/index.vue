<template>
  <section>
    <Hero />
    <BezierSvg1 />
    <Jumbotron />
    <BezierSvg2 />
    <Main />
    <Adcard />
  </section>
</template>

<script>
import BezierSvg1 from '@/static/images/Curve.svg'
import BezierSvg2 from '@/static/images/Curve2.svg'
import Adcard from '@/components/Adcard'
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import Jumbotron from '@/components/Jumbotron'
export default {
  components: {
    BezierSvg1,
    BezierSvg2,
    Adcard,
    Hero,
    Main,
    Jumbotron
  }
}
</script>

<style></style>
