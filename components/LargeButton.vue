<template>
  <section>
    <nuxt-link to="/Shinkan">
      <div class="container fluid">
        <div class="box">
          <img src="images/main/logo4.png"></img><strong>新歓について</strong>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fluid {
  background-color: #89cfeb;
  padding-left: 50px;
  padding-right: 50px;
}

.box {
  padding: 1.75rem;
  text-align: center;
  font-size: 1.5vw;
  img{
    height: 2em;
  }
}
</style>
