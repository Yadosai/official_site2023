<template>
  <section>
    <nuxt-link to="/Yadosai"
      ><div class="yadosaitoha_logo">What is Yadokari?</div></nuxt-link
    >
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.yadosaitoha_logo {
  font-size: 5vw;
  color: black;
  padding: 20px;
  background: linear-gradient(
    to right,
    #5dfb1f 10%,
    black 10% 20%,
    #5dfb1f 20% 80%,
    black 80% 90%,
    #5dfb1f 90%
  );
  text-align: center;
}
</style>