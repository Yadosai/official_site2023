<template>
  <section>
    <div class="Jumbotron">
      <div class="notice">お知らせ</div>
      <hr id="j-line" />
      <nuxt-link to="/mogi">
        <p class="content">・模擬店情報掲載中！</p>
      </nuxt-link>
      <hr id="j-line" />
      <nuxt-link to="/Traffic">
        <p class="content">・お車や自転車でご来場の方へ</p>
      </nuxt-link>
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
