<template>
  <section>
    <div id="header-img-wrap">
      <img src="/images/header.jpeg" alt="header-image" id="header-img">
    </div>
    <div id="event-wrap" class="p-6">
      <h1 class="is-size-5 has-text-weight-bold" id="event-title">
        トーチトワリング
      </h1>
      <p id="event-actor">総務書記部局・宣伝部局</p>
      <div id="event-img-wrap" class="mt-4">
        <img src="/images/events/torch.jpg" alt="torch-img" id="event-img">
      </div>
      <p id="event-description" class="mt-4">
        企画についての情報をここに記述する。<br>
        短すぎると意味がないので内容を考える必要がある。<br>
        内容を考えるタスクを作ってもいいかもしれない。<br>
        五月祭では下記のように他の企画へのリンクを貼っている。<br>
      </p>
      <div id="other-events" class="mt-6">
        <CardsSwiper/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
    height: 400px;
    #event-img {
      height: 100%;
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