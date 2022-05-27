<template>
  <section>
    <div class="Jumbotron">
      <div class="notice">お知らせ</div>
      <hr id="j-line" />
      <nuxt-link to="/Traffic">
        <p class="content">・お車や自転車でご来場の方へ</p>
      </nuxt-link>
      <hr id="j-line" />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeVDRQBcBPVhTByzLfZYyZ0WSGuUH0Ouzvx1RPVXHnk-Vb5WQ/viewform"
      >
        <p class="content">・事前登録受付中！</p>
      </a>
      <hr id="j-line" />
      <a href="https://twitter.com/yadokari_sai/status/1526885677412978688">
        <p class="content">・第48回宿舎祭開催決定！</p>
      </a>
      <hr id="j-line" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.Jumbotron {
  background-color: #89cfeb;
  border-color: white;
}

.notice {
  font-size: 2rem !important;
  background-color: #89cfeb;
}

.j-line {
  background-color: white;
}

.content {
  width: 100%;
  margin-bottom: 20px;
}

.red {
  color: red;
}
</style>
