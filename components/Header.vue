<template>
  <section>
    <v-carousel :show-arrows="false" hide-delimiters cycle>
      <v-carousel-item
        src="/images/carousel_image1.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 fes-title-wrap">
            <span class="fes-title">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="/images/carousel_image2.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 fes-title-wrap">
            <span class="fes-title">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="/images/carousel_image3.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 fes-title-wrap">
            <span class="fes-title">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="/images/carousel_image4.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 fes-title-wrap">
            <span class="fes-title">やどかり祭</span>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div class="pa-10 red darken-4 text-center">
      Here is festival news 
    </div>
    <!-- <div id="curve-image-wrap" class="blue d-flex justify-end align-center">
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
.fes-title {
  font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
}
// .fes-title-wrap {
//   background-color: #B71C1C;
//   border-radius: 10px;
//   padding: 15px;
// }
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