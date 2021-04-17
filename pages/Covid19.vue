<template>
  <section>
    <div id="header-img-wrap">
      <img id="header-img" src="/images/header.jpeg" alt="header-image" />
    </div>
    <div id="event-wrap" class="p-6">
      <h1 id="event-title" class="is-size-5 has-text-weight-bold">
        2021年度やどかり祭開催中止のお知らせ
      </h1>
      <p id="event-actor">第47回 筑波大学宿舎祭実行委員会</p>
      <p id="event-description" class="mt-4">
        平素より宿舎祭実行委員会の活動にご理解とご協力を賜りありがとうございます。<br />
        当実行委員会では新型コロナウイルス感染症拡大の状況を鑑み、感染拡大を防ぐため今年度も春学期中の開催は避けるべきであり、さらに秋学期での開催はやどかり祭のコンセプトである「新入生同士に仲良くなってもらう機会を提供すること」にそぐわないなどの理由から総合的に判断し、大変遺憾ながら、2021年度の開催も断念することにいたしました。<br />
        来年度にこそ、素晴らしい祭を作れるように委員一丸となって引き続き努力してまいりますので、今後ともお力添えのほど、よろしくお願いいたします。
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
export default {}
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
