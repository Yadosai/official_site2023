<template>
  <section>
    <div id="header-img-wrap">
      <img id="header-img" src="/images/header.jpeg" alt="header-image" />
    </div>
    <div id="event-wrap" class="p-6">
      <h1 id="event-title" class="is-size-5 has-text-weight-bold">
        やどかり祭
      </h1>
      <div id="event-img-wrap" class="mt-4">
        <img
          id="event-img"
          src= "/images/info/sample2.jpg"
          alt="sample2"
        />
      </div>
      <p id="event-description" class="mt-4">
        筑波大学には、全国どころか世界中から学生が集まってきます。</br>
        そしてここ、つくばの地に多くの学生がやどを借ります。</br>
        やどかり祭は「宿舎祭」と名がついていますが、宿舎入居者のみならず、<br>
        新一年生を中心とした多くの学生によってつくられる祭りです。</br>
        新しく集まってきた新入生に交流の場を設け、仲を深めてもらうために、日頃お世話になっている地元の方々に楽しんでいただき、たくましい筑波生の姿を目にしてもらうために、</br>
        私たちはこの祭を大切に、華やかに作っています。</br>
        また、学生だけの力ではなく、本当に沢山の方の力がこの祭を支えてくれています。</br>
        祭を作るまでに生まれるさまざまな交流も、この祭の大きな意義だと感じます。</p>
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
