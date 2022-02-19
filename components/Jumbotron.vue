<template>
  <section>
    <div class="Jumbotron">
      <div class="notice">お知らせ</div>
      <hr id="j-line" />
      <a href="https://twitter.com/yadokari_sai/status/1485464944338358272">
        <p class="content">
          ・ダンス出演団体募集中！<span class="red">※締め切りました</span>
        </p>
      </a>
      <hr id="j-line" />
      <a href="/Covid19">
        <p class="content">・第47回やどかり祭は中止となりました。</p>
      </a>
      <hr id="j-line" />
      <nuxt-link to="/Shinkan">
        <p class="content">・新歓実施中!</p>
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
