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

      <!-- <div class="columns">
        <div class="column">
          <Card image-path="/images/info/sample1.jpg" title="アクセス" />
        </div>
        <div class="column">
          <Card image-path="/images/info/sample2.jpg" title="お知らせ" />
        </div>
        <div class="column">
          <Card image-path="/images/info/sample1.jpg" title="ご支援・ご協賛" />
        </div>
      </div> -->
    </div>
    <!-- <div id="sponsors-wrap" class="p-6">
      <div class="columns">
        <div class="column">
          <Card image-path="/images/ad/ad-offer.svg" />
        </div>
        <div class="column">
          <Card image-path="/images/ad/ad1.svg" />
        </div>
        <div class="column">
          <Card image-path="/images/ad/ad2.svg" />
        </div>
      </div>
    </div> -->
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
  background-color: #87ceeb;
}

#sponsors-wrap {
  background-color: #87ceeb;
}
</style>
