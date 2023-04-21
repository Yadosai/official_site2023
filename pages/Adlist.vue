<template>
  <section>
    <div id="header-img-wrap">
      <img id="header-img" src="/images/header.jpeg" alt="header-image" />
    </div>
    <div id="event-wrap" class="p-6">
      <h1 id="event-title" class="is-size-5 has-text-weight-bold">
        協賛団体一覧（敬称略、順不同）
      </h1>
      <dd>
        <div class="ad_list">
          <dl>
            <dt>銀の豚</dt>
            <dt>株式会社アイデン</dt>
            <dt>めんとるステーション</dt>
            <dt>香陵住販株式会社</dt>
            <dt>トクハシ(メガネ パリミキ）</dt>
            <dt>上總屋不動産筑波大学前支店</dt>
            <dt>プラス1カフェガーデン</dt>
            <dt>飯岡医院</dt>
            <dt>株大成不動産株式会社</dt>
            <dt>春日歯科医院</dt>
            <dt>有限会社岩崎電機</dt>
            <dt>スープファクトリー</dt>
            <dt>武田塾 つくば校</dt>
            <dt>学園中央自動車学校</dt>
            <dt>どら焼き専門店 志ち乃</dt>
            <dt>PROGRESS</dt>
            <dt>ASA学園都市(朝日新聞等販売)</dt>
            <dt>博多拉麺 一休</dt>
            <dt>Neutral Closet・合同会社定越</dt>
            <dt>スタジオソングサイクル</dt>
            <dt>茶の木村園</dt>
            <dt>ファミリーマート春日4丁目店</dt>
            <dt>飯塚スタジオ</dt>
            <dt>イセブ</dt>
            <dt>ごう家</dt>
            <dt>株式会社秀和不動産</dt>
            <dt>北方園</dt>
            <dt>つくばデザイン不動産</dt>
            <dt>美味コレクション</dt>
          </dl>
          <dl>
            <dt>カードックオオノ</dt>
            <dt>勧学院</dt>
            <dt>南山堂薬局つくば店</dt>
            <dt>びすとろ椿々 追越店</dt>
            <dt>naked bar</dt>
            <dt>セブンイレブンつくば松見公園店</dt>
            <dt>桜ヶ丘歯科センター</dt>
            <dt>TSSつくば予備校</dt>
            <dt>うなぎ松乃家</dt>
            <dt>(有)細田金物店</dt>
            <dt>松見タクシー</dt>
            <dt>七福軒</dt>
            <dt>井上サイクル</dt>
            <dt>印晶堂</dt>
            <dt>かつ大</dt>
            <dt>灯禾軒</dt>
            <dt>Lagoon</dt>
            <dt>LINER NOTES(ライナーノーツ)</dt>
            <dt>菱光建設株式会社</dt>
            <dt>プリムローズ</dt>
            <dt>ラーメン龍郎</dt>
            <dt>一誠商事</dt>
            <dt>肉のいなげや</dt>
            <dt>Layout9</dt>
            <dt>Cafe & Bar Trigger</dt>
            <dt>ひととつむぐカフェ 縁counter</dt>
            <dt>Banzai Naporitan</dt>
            <dt>FLOW会計事務所</dt>
          </dl>
        </div> 
      </dd>
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

.ad_list {
  padding: 0.5em;
  margin: 1em 0.5em;
  display: flex;
  justify-content: space-around;
}
</style>
