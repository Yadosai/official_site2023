<template>
  <main>
    <div id="events-wrap" class="p-6">
      <CardsSwiper />
    </div>
    <div id="cards-wrap" class="p-6">
      <div class="columns">
        <div class="column">
          <Card image-path="/images/info/sample3.jpeg" title="やどかり祭とは" />
        </div>
        <div class="column">
          <Card image-path="/images/info/sample2.jpg" title="新歓について" />
        </div>
        <div class="column">
          <Card image-path="/images/info/sample1.jpg" title="ニュース" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#events-wrap {
  background-color: #89cfeb;
}

#cards-wrap {
  background-color: #97c2eb;
}

#sponsors-wrap {
  background-color: #87ceeb;
}
</style>
