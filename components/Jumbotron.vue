<template>
  <section>
    <div class="Jumbotron">
      <div class="notice">お知らせ</div>
      <hr id="j-line" />
      <nuxt-link to="/Shinkan">
        <p class="content">・新歓実施中!</p>
      </nuxt-link>
      <hr id="j-line" />
      <a href="https://twitter.com/yadokari_sai/status/1512385737978953729">
        <p class="content">・大学生クイズ出演者募集中！</p>
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
