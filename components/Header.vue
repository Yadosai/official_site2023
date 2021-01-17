<template>
  <section>
    <!-- <v-carousel :show-arrows="false" hide-delimiters cycle height="600">
      <v-carousel-item class="carousel-image carousel-image1">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="fes-title-wrap">
            <span class="fes-title-text text-h2 font-weight-black">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item class="carousel-image carousel-image2">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="fes-title-wrap">
            <span class="fes-title-text text-h2 font-weight-black">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item class="carousel-image carousel-image3">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="fes-title-wrap">
            <span class="fes-title-text text-h2 font-weight-black">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item class="carousel-image carousel-image4">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="fes-title-wrap">
            <span class="fes-title-text text-h2 font-weight-black">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div class="pa-10 red darken-4 text-center">
      Here is festival news 
    </div>
    <div id="curve-image-wrap" class="blue d-flex justify-end align-center">
      <div id="short-news" class="d-md-flex d-sm-block">
        <div class="news font-weight-medium white--text text-h4 text-sm-right" id="prev-fes">
          前夜祭5月25日
        </div>
        <div class="news font-weight-medium white--text text-h4 text-sm-right" id="fes">
          本祭5月29日
        </div>
      </div>
    </div> -->
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