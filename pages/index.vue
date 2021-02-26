<template>
  <section>
    <div class="hero-index">
      <Hero/>
      <!--<div class="curve-hero">
        <BezierSvg1/> 
      </div>-->
    </div>
    <div class="curve-footer">
      <BezierSvg2/>
    </div>
  </section>
</template>

<script>

/*import BezierSvg1 from '@/static/images/Curve.svg'*/
import BezierSvg2 from '@/static/images/Curve2.svg'
import Adcard from '@/components/Adcard'
import Hero from '@/components/Hero'
export default {
  components: {
    /*BezierSvg1,*/
    BezierSvg2,
    Adcard,
    Hero
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
