<template>
  <section>
   
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.carousel-image{
  background-size: cover;
  position: relative;
  &1{
    background-image: url('/images/carousel_image1.jpg');
    background-position: top center;
  }
  &2{
    background-image: url('/images/carousel_image2.jpg');
    background-position: center center;
  }
  &3{
    background-image: url('/images/carousel_image3.jpg');
    background-position: center center;
  }
  &4{
    background-image: url('/images/carousel_image4.jpg');
    background-position: center center;
  }
}
.fes-title-wrap {
  .fes-title-text {
    font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif!important;
  }
}
.fes-title-wrap {
  background-color: #B71C1C;
  border-radius: 10px;
  padding: 15px;
}
#curve-image-wrap {
  height: 150px;
  position: relative;
  top: -150px;
  z-index: 999999;
  padding-right: 10%;

  #short-news {
    @include display_pc {
      #prev-fes::after {
        content: '/';
    }
    }
  }
}
</style>