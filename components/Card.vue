<template>
  <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img :src="imagePath" alt="img">
        </figure>
      </div>
      <div class="card-header" v-if="title">
        <p class="card-header-title">
          {{ title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'imagePath',
    'title',
    'description'
  ],
}
</script>

<style>

</style>