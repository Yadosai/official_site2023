<template>
  <section>
    <div id="header-img-wrap">
      <img id="header-img" src="/images/header.jpeg" alt="header-image" />
    </div>
    <div id="traffic-wrap" class="p-6">
      <h1 id="traffic-title" class="is-size-5 has-text-weight-bold">
        交通に関する注意事項
      </h1>
      <div class="traffic">      <p id="traffic-description" class="mt-4">
        前夜祭(金曜日)、本祭(土曜日)の両日は多くの来場者が予想されます。</br>
        駐車場は十二分には用意しておりますが、確実に駐車できるという保証はできません。できるだけ、公共交通機関をご利用ください。</br></br>
        なお、お車でご来場される方に注意事項がございます。本祭は大学内の道路上で行うこととなっており、歩行者天国を設けております。手前の駐車場付近にバリケードがございますが、それより先には<span style="font-weight:bold; color:#FF0000">絶対に</span>進まないでください。</br>
        前夜祭(金曜日)は図右上、<span style="font-weight:bold">緑色部の野球場横駐車場</span>をご利用ください。</br>
        当日(土曜日)は、図右上の野球場横駐車場を除く緑色部の駐車場全てがご利用になれます。</br></br>
        <span style="font-weight:bold">自転車で来られる方へのおしらせです。</span></br>
        自転車でお越しの際は必ず紫色部の駐輪場に停めてください。紫色部以外に止められている自転車を発見次第、付近の駐輪場に停めさせて頂きますので予めご了承ください。
      </p>
      <p><a href="images/info/traffic_info.png" target="_blank"><img src="images/info/traffic_info.png" width="400" height="600"></img></a></p></div>
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
.traffic {
  display: flex;
}
.traffic>p {
  width: 50%;
}
#traffic-wrap {
  background-color: rgba($color: #231815, $alpha: 0.8);
  color: white;

  #traffic-img-wrap {
    text-align: center;
    width: 100%;
    #traffic-img {
      width: 100vh;
    }
  }

  #traffic-description {
    text-align: left;
  }

}
#other-traffic-wrap {
  text-align: center;
  background-color: #89cfeb;
}
</style>
