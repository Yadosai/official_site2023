<template>
  <section>
    <swiper :options="swiperOption">
      <swiper-slide>
        <nuxt-link to="/events/torch">
          <Card
            image-path="/images/events/torch.jpg"
            title="トーチトワリング" /></nuxt-link
      ></swiper-slide>
      <swiper-slide>
        <nuxt-link to="/events/yukacon">
          <Card image-path="/images/events/yukacon.jpg" title="ゆかコン" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/events/mikoshi">
          <Card image-path="/images/events/mikoshi.jpeg" title="神輿" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/events/himoji">
          <Card image-path="/images/events/himoji.jpeg" title="火文字" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/events/dance">
          <Card image-path="/images/events/dance.jpeg" title="ダンス" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/events/quiz">
          <Card image-path="/images/events/quiz.png" title="大学生クイズ" />
        </nuxt-link>
      </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/events/live">
          <Card image-path="/images/events/live.png" title="野外ライブ" />
        </nuxt-link>
      </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        speed: 2000, // スライドの切り替わりスピード
        slidesPerView: 1,
        centeredSlides: true, // スライダーを真ん中に
        loop: true, // 無限ループ
        autoplay: {
          // スライドの自動切り替え
          delay: 5000, // スライドの自動切り替えの秒数
          disableOnInteraction: false // 何らかのアクション後の自動切り替えを再開
        },
        pagination: { // ページネーション設定
          el: '.swiper-pagination',
          clickable: true
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

<style></style>
