<template>
  <main>
    <div class="event-h1">企画紹介</div>
    <div id="events-wrap" class="p-6">
      <CardsSwiper />
    </div>
    <div id="cards-wrap" class="p-6">
      <div class="columns">
        <div class="column">
          <Card
            image-path="/images/info/sample3.jpeg"
            title="やどかり祭とは -現在準備中-"
          />
        </div>
        <div class="column">
          <Card
            image-path="/images/info/sample2.jpg"
            title="新歓について -現在準備中-"
          />
        </div>
        <div class="column">
          <Card
            image-path="/images/info/sample1.jpg"
            title="ニュース  -現在準備中-"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  background-color: #89cfeb;
  padding: 3em;
}
#events-wrap {
  background-color: #89cfeb;
}
.event-h1 {
  padding-top: 1rem;
  margin-bottom: -3rem;
  font-size: 2rem !important;
  background-color: #89cfeb;
}

#cards-wrap {
  background-color: #89cfeb;
}

#sponsors-wrap {
  background-color: #87ceeb;
}
</style>
