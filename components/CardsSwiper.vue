<template>
  <section>
    <swiper
      :options="swiperOption">
      <swiper-slide>
        <Card image-path="/images/events/torch.jpg" title="トーチトワリング"/>
      </swiper-slide>
      <swiper-slide>
        <Card image-path="/images/events/hanabi.jpg" title="花火"/>
      </swiper-slide>
      <swiper-slide>
        <Card image-path="/images/events/yukacon.jpg" title="ゆかコン"/>
      </swiper-slide>
      <swiper-slide>
        <Card image-path="/images/events/torch.jpg" title="トーチトワリング"/>
      </swiper-slide>
      <swiper-slide>
        <Card image-path="/images/events/hanabi.jpg" title="花火"/>
      </swiper-slide>
      <swiper-slide>
        <Card image-path="/images/events/yukacon.jpg" title="ゆかコン"/>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        speed: 2000,//スライドの切り替わりスピード
        slidesPerView: 1,
        centeredSlides: true,//スライダーを真ん中に
        loop: true, //無限ループ
        autoplay: { //スライドの自動切り替え
          delay: 5000,//スライドの自動切り替えの秒数
          disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
        },
        breakpoints: {
          // ウインドウサイズが320px以上の時
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // ウインドウサイズが480px以上の時
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // ウインドウサイズが640px以上の時
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      }
    }
  }
}
</script>

<style>

</style>