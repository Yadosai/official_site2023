<template>
  <div class="movie">
    <youtube
      ref="youtube"
      class="flame"
      :video-id="videoId"
      @ready="ready"
      @ended="ended"
      @playing="playing"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
export default {
  data() {
    return {
      videoId: '_tNOc6wGqqg'
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    ready() {
      console.log('ready')
    },
    ended() {
      console.log('ended')
    },
    playing() {
      console.log('playing')
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  text-align: center;
}
.flame {
}
</style>
