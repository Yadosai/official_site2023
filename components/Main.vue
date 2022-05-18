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
    <div class="pamphlet">
      <SubsubHeader />
    </div>
    <div class="shinkan-link">
      <LargeButton />
    </div>
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
import LargeButton from '@/components/LargeButton.vue'
import SubHeader from '@/components/SubHeader'
import SubsubHeader from '@/components/SubsubHeader'
// import Movie from '@/components/Movie'
// import ShinkanSchedule from '@/components/ShinkanSchedule'
export default {
  components: {
    Jumbotron,
    LargeButton,
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
.pamplet {
  padding: 3rem, 1rem;
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
</style>
