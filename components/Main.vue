<template>
  <main>
    <div class="news">
      <Jumbotron />
    </div>
    <!-- <div class="ShinkanSchedule">
      <ShinkanSchedule />
    </div> -->
    <div class="band">
      <SubHeader />
    </div>
    <div>
      <SubsubHeader />
    </div>
    <!-- <div>
      <SubsubsubHeader />
    </div> -->
    <div>
      <SubsubsubsubHeader />
      </div>
      <div>
        <SubsubsubsubsubHeader />
        </div>
    <!-- <div class="shinkan-link">
      <LargeButton />
    </div> -->
    <!-- <div class="ad-h1">事前登録フォーム</div>
    <p class="form">
      <del
        >第48回宿舎祭は完全事前登録制となっております。登録は<a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeVDRQBcBPVhTByzLfZYyZ0WSGuUH0Ouzvx1RPVXHnk-Vb5WQ/viewform"
          >こちら</a
        >から。</del
      ></br><span style="color: red"
        >事前登録人数上限に達したため応募を締め切りました。</span
      >
    </p> -->
    <div class="traffic">交通情報</div>
    <div id="traffic-wrap">
      お車や自転車でご来場される方は<nuxt-link to="/Traffic">こちら</nuxt-link
      >をご覧ください
    </div>
    <div class="mogi"><nuxt-link to="/mogi">模擬店情報</nuxt-link></div>
    <div id="mogi-wrap"></div>
    <!-- <div class="event-h1">新歓YoutubeLive!!</div>
    <div class="youtube-link">
      <Movie />
    </div> -->
    <div class="event-h1">企画紹介</div>
    <div id="events-wrap">
      <CardsSwiper />
    </div>
    <div class="ad-h1">協賛団体一覧</div>
    <div>
      <Adcard />
    </div>
  </main>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
// import LargeButton from '@/components/LargeButton.vue'
import SubHeader from '@/components/SubHeader'
import SubsubHeader from '@/components/SubsubHeader'
// import SubsubsubHeader from '@/components/SubsubsubHeader.vue'
import SubsubsubsubHeader from '@/components/SubsubsubsubHeader.vue'
import SubsubsubsubsubHeader from '@/components/SubsubsubsubsubHeader.vue'
// import Movie from '@/components/Movie'
// import ShinkanSchedule from '@/components/ShinkanSchedule'
export default {
  components: {
    Jumbotron,
    // LargeButton,
    SubHeader,
    SubsubHeader,
    SubsubsubsubHeader,
    SubsubsubsubsubHeader
    // SubsubsubHeader
    // Movie,
    // ShinkanSchedule
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: #89cfeb;
  padding: 3rem;
}
.band {
  padding: 2rem 2rem 0rem;
}
#events-wrap {
  background-color: #89cfeb;
  padding: 3vh;
}
.event-h1 {
  padding-top: 1rem;
  margin-bottom: -1rem;
  font-size: 2rem !important;
  background-color: #89cfeb;
}
.ad-h1 {
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem !important;
  background-color: #89cfeb;
}
.traffic {
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem !important;
  background-color: #89cfeb;
}
#cards-wrap {
  background-color: #89cfeb;
}

#shinkan-link {
  background-color: #89cfeb;
  padding: 2rem;
}

.youtube-link {
  padding: 2rem;
}
#sponsors-wrap {
  background-color: #87ceeb;
}

.form {
  font-size: 1.5rem;
  background-color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
}
#traffic-wrap {
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
}
.mogi {
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem !important;
  background-color: #89cfeb;
}
</style>
