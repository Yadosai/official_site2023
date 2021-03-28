<template>
  <section>
    <div class="box">
        <figure class="image is-5by3">
          <img :src="imagePath" class="ratio-fix" alt="img" />
        </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.box {
   padding: 0; 
}
.ratio-fix {
 object-fit: cover;
}
</style>
