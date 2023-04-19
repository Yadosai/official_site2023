<template>
  <section>
    <nuxt-link to="/Yadosai"
      ><div class="yadosaitoha_logo">やどかり祭ってなに？</div></nuxt-link
    >
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.yadosaitoha_logo {
  font-size: 4vw;
  color: white;
  padding: 20px;
  background: linear-gradient(
    to right,
    #1f45fb 10%,
    black 10% 20%,
    #f3164e 20% 80%,
    black 80% 90%,
    #1f45fb 90%
  );
  text-align: center;
  border-radius: 10px;
}
</style>
