<template>
  <div>
    <h1>
      <a href="https://github.com/anteriovieira/vue-youtube">vue-youtube</a>
    </h1>
    <youtube
      ref="youtube"
      :video-id="videoId"
      @ready="ready"
      @ended="ended"
      @playing="playing"
    />
    <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
export default {
  data() {
    return {
      videoId: 'nteDXuqBfn0'
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    pauseVideo() {
      this.player.pauseVideo()
    },
    stopVideo() {
      this.player.stopVideo()
    },
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
