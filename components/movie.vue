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
  position: relative;
  height: 0;
  padding: 30px 0 56.25%;
  overflow: hidden;
}
.flame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
