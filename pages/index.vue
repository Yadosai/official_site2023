<template>
  <section>
    <Header/>
    <!-- <Main/> -->
    <Card/>
    <BezierSvg />
  </section>
</template>

<script>
import BezierSvg from '@/static/images/Curve.svg'
import Card from '@/components/Card.vue'
export default {
  components: {
    BezierSvg,
    Card
  }
}
</script>

<style>

</style>
