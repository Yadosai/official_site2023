<template>
  <section class="hero-img">
    <div class="hero-img-body">
      <h1 class="title">
        <img
          class="title"
          src="images/main/logo2.png"
          alt="やどかり祭"
        /><!-- やどかり祭 -->
      </h1>
    </div>
    <BezierSvg1 />
  </section>
</template>

<script>
import BezierSvg1 from '@/static/images/Curve.svg'
export default {
  components: {
    BezierSvg1
  }
}
</script>

<style lang="scss" scoped>
.hero-img {
  background-image: url(/images/main/hero-image.png);
  height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.hero-img-body {
  flex-grow: 1;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -60%);
  width: 50vw;
  margin: 0;
  padding: 0;
}
</style>
