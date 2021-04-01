<template>
  <main>
    <div class="news">
      <Jumbotron />
    </div>
    <div class="shinkan-link">
      <LargeButton />
    </div>
    <div class="event-h1">企画紹介</div>
    <div id="events-wrap" class="p-6">
      <CardsSwiper />
    </div>
  </main>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
import LargeButton from '@/components/LargeButton.vue'
export default {
  components: {
    Jumbotron,
    LargeButton
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: #89cfeb;
  padding: 3rem;
}
#events-wrap {
  background-color: #89cfeb;
}
.event-h1 {
  padding-top: 1rem;
  margin-bottom: -1rem;
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

#sponsors-wrap {
  background-color: #87ceeb;
}
</style>
