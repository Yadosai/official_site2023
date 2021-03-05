<template>
  <section>
    <div id="header-img-wrap">
      <img src="/images/header.jpeg" alt="header-image" id="header-img">
    </div>
    <div id="event-wrap" class="p-6">
      <h1 class="is-size-5 has-text-weight-bold" id="event-title">
        {{ event.name }}
      </h1>
      <p id="event-actor">{{ event.actor }}</p>
      <div id="event-img-wrap" class="mt-4">
        <img :src="`/images/events/${event.image_name}`" alt="torch-img" id="event-img">
      </div>
      <p id="event-description" class="mt-4">
        {{ event.description }}
      </p>
      <div id="other-events" class="mt-6">
        <CardsSwiper/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      event: {}
    }
  },
  created() {
    const params = this.$nuxt.$route.params;
    const events_info = require('../../builds/events-info');
    const event = events_info.events[params.event];
    this.event = event;
  },
  head () {
    return {
      title: this.event.name,
      meta: [
        { hid: 'description', name: 'description', content: this.event.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#header-img-wrap {
  height: 100px;
  #header-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
#event-wrap {
  background-color: rgba($color: #231815, $alpha: 0.8);
  color: white;

  #event-img-wrap {
    text-align: center;
    width: 100%;
    /*height: 400px;*/
    #event-img {
      /*height: 100%;*/
      width: 100vh;
    }
  }

  #event-description {
    text-align: center;
  }

  #other-events {
    text-align: center;
  }
}

</style>