<template>
  <section>
    <div class="row justify-content-center">
      <a href="https://mentoru.jp/info/tsukuba.html" target="_blank">
        <img
          src="images/ad/めんとる.jpg"
          alt="sponsor"
          class="web-ad-content"
        />
      </a>
      <a href="http://www.seirock-ya.jp/" target="_blank">
        <img src="images/ad/清六家.jpg" alt="sponsor" class="web-ad-content" />
      </a>
      <a href="/Adlist">
        <img src="images/ad/etc.png" alt="sponsor" class="web-ad-content" />
      </a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
}
.box {
  padding: 0.5em;
  margin: 0.5em 1em;
  border-radius: 10px;
}
.box:hover {
  box-shadow: 0px 0px 0px 0px black;
}
.web-ad-content {
  height: 111px;
  width: 171px;
  text-align: center;
  margin: 0.5em 1em;
  border-radius: 10px;
}
</style>
