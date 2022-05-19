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
    <!-- <div class="shinkan-link">
      <LargeButton />
    </div> -->
    <div class="ad-h1">事前登録フォーム</div>
    <p class="form">
      第48回宿舎祭は完全事前登録制となっております。登録は<a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeVDRQBcBPVhTByzLfZYyZ0WSGuUH0Ouzvx1RPVXHnk-Vb5WQ/viewform"
        >こちら</a
      >から。
    </p>
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
// import Movie from '@/components/Movie'
// import ShinkanSchedule from '@/components/ShinkanSchedule'
export default {
  components: {
    Jumbotron,
    // LargeButton,
    SubHeader,
    SubsubHeader
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
</style>
