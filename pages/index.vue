<template>
  <section>
<<<<<<< HEAD
    <div class="hero-index">
      <Hero/>
      <!--<div class="curve-hero">
        <BezierSvg1/> 
      </div>-->
    </div>
      <BezierSvg2/>
=======
    <Hero />
    <BezierSvg1 />
    <BezierSvg2 />
    <Main />
    <Adcard/>
>>>>>>> develop
  </section>
</template>

<script>

/*import BezierSvg1 from '@/static/images/Curve.svg'*/
import BezierSvg2 from '@/static/images/Curve2.svg'
import Adcard from '@/components/Adcard'
import Hero from '@/components/Hero'
import Main from '@/components/Main'
export default {
  components: {
    /*BezierSvg1,*/
    BezierSvg2,
    Adcard,
    Hero,
    Main
  },
  head () {
    return {
      title: 'トップ',
      meta: [
        { hid: 'description', name: 'description', content: 'Here is description' }
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
