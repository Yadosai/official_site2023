<template>
  <section>
    <Header/>
    <!-- <Main/> -->
    <BezierSvg1 />
    <Card/>
    <BezierSvg2 />
  </section>
</template>

<script>
import BezierSvg1 from '@/static/images/Curve.svg'
import BezierSvg2 from '@/static/images/Curve2.svg'
import Card from '@/components/Card.vue'
export default {
  components: {
    BezierSvg1,
    BezierSvg2,
    Card
  }
}
</script>

<style>

</style>
