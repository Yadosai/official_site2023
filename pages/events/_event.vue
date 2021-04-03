<template>
  <section>
    <div id="header-img-wrap">
      <img id="header-img" src="/images/header.jpeg" alt="header-image" />
    </div>
    <div id="event-wrap" class="p-6">
      <h1 id="event-title" class="is-size-5 has-text-weight-bold">
        {{ event.name }}
      </h1>
      <p id="event-actor">{{ event.actor }}</p>
      <div id="event-img-wrap" class="mt-4">
        <img
          id="event-img"
          :src="`/images/events/${event.image_name}`"
          alt="torch-img"
        />
      </div>
      <p id="event-description" class="mt-4">
        {{ event.description }}
      </p>
    </div>
    <div>
      <div id="other-event-wrap" class="p-6">
        <CardsSwiper />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      event: {}
    }
  },
  head() {
    return {
      title: this.event.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.event.description
        }
      ]
    }
  },
  created() {
    const params = this.$nuxt.$route.params
    const eventsInfo = require('../../builds/events-info')
    const event = eventsInfo.events[params.event]
    this.event = event
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
    #event-img {
      width: 100vh;
    }
  }

  #event-description {
    text-align: left;
  }
}
#other-event-wrap {
  text-align: center;
  background-color: #89cfeb;
}
</style>
