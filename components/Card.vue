<template>
  <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img :src="imagePath" class="image-fix" alt="img" />
        </figure>
      </div>
      <div v-if="title" class="card-header">
        <p class="card-header-title">
          {{ title }}
        </p>
      </div>
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
.image-fix {
 object-fit: cover;
}
</style>
