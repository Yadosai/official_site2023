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
            <dt>麺や 蒼</dt>
            <dt>株式会社アイデン</dt>
            <dt>ASA 学園都市</dt>
            <dt>（株）アジア住販</dt>
            <dt>さくらの森ダイニング alecore</dt>
            <dt>（有）飯田自動車整備工場</dt>
            <dt>飯塚スタジオ</dt>
            <dt>博多拉麺 一休</dt>
            <dt>株式会社井上フード（粉とクリーム・カレーショップ）</dt>
            <dt>有限会社岩崎電機</dt>
            <dt>印晶堂</dt>
            <dt>ひととつむぐカフェ 縁 counter</dt>
            <dt>CARDOCK オオノ</dt>
            <dt>ガーリーショット</dt>
            <dt>春日歯科医院</dt>
            <dt>かつ大</dt>
            <dt>勧学院</dt>
            <dt>らーめん 逆流</dt>
            <dt>牛角 つくばテクノパーク桜店</dt>
            <dt>銀の豚</dt>
            <dt>ごう家</dt>
            <dt>小山商会</dt>
            <dt>桜ヶ丘歯科センター</dt>
            <dt>suplis hair design</dt>
            <dt>SALON DES CENT</dt>
            <dt>どら焼き専門店 志ち乃</dt>
            <dt>株式会社秀和不動産</dt>
            <dt>Jupiter</dt>
            <dt>スーパーオートバックス 土浦東大通り</dt>
            <dt>清六家</dt>
            <dt>セブンイレブン つくば松見公園店</dt>
            <dt>大成産業株式会社</dt>
            <dt>武田塾</dt>
            <dt>ラーメン 龍郎</dt>
          </dl>
          <dl>
            <dt>茶の木村園</dt>
            <dt>CHOKKIN NABE</dt>
            <dt>つくば石焼芋</dt>
            <dt>つくば青年会議所</dt>
            <dt>（株）筑波地所</dt>
            <dt>つくばデザイン不動産</dt>
            <dt>つくばローカルコミュニティー</dt>
            <dt>灯禾軒</dt>
            <dt>TSS つくば予備校</dt>
            <dt>Cafe & Bar Trigger</dt>
            <dt>南山堂薬局</dt>
            <dt>肉のいなげや</dt>
            <dt>naked bar</dt>
            <dt>メガネ パリミキ つくば大穂店</dt>
            <dt>カラオケ BanBan つくば学園店</dt>
            <dt>有限会社BIZ SHOP</dt>
            <dt>びすとろ椿々 追越店</dt>
            <dt>美味コレクション</dt>
            <dt>平砂理容室</dt>
            <dt>（有）フジエステート</dt>
            <dt>レストラン フライパン</dt>
            <dt>プログレス つくば店</dt>
            <dt>（有）細田金物店</dt>
            <dt>北方園</dt>
            <dt>本家かまどや つくば春日店</dt>
            <dt>おそば 増田屋</dt>
            <dt>うなぎ 松乃家</dt>
            <dt>MUSIC PLANT</dt>
            <dt>めんとるステーションつくば</dt>
            <dt>レストラン 夢屋</dt>
            <dt>菱光建設株式会社</dt>
            <dt>Layout9</dt>
            <dt>ローソン 春日三丁目店</dt>
            <dt>お酒とごはん わかたろう</dt>
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
