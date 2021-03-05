<template>
  <section>
    <div id="header-img-wrap">
      <img src="/images/header.jpeg" alt="header-image" id="header-img">
    </div>
    <div id="Shinkan-wrap" class="p-6">
      <h1 class="is-size-5 has-text-weight-bold" id="Shinkan-title">
        新歓情報
      </h1>

      <h3 class="is-size-5 has-text-weight-bold" id="Shinkan-subtitle">
        新歓予定
      </h3>
      <div class="Shinkan-schedule">

        <p class="Shinkan-schedule-content"> 
         新入生のみなさん、入学おめでとうございます！🌸<br>
          コロナの影響で入学式が中止になったり、入学早々大変だったと思います。<br>
          「 その分これからの大学生活めいっぱい楽しみたい…」<br>
          そんなあなたにオススメなのがやどかり祭実行委員会！<br>
        </p>  

        <p class="Shinkan-schedule-content">
          ＜新歓日程＞<br>
          ※新型コロナウイルスの影響により、日程は未定となっております。決定した際にはHP、Twitter上でお伝えします。ご了承ください。
        </p>
           
      </div> 

      <hr>

      <h3 class="is-size-5 has-text-weight-bold" id="Shinkan-subtitle">
        宿舎祭実行委員会とは
      </h3>
      <div class = "Shinkan-yadosaitoha">
        <p id="Shinkan-yadosaitoha-content" class="mt-4">
          宿舎祭実行委員会は5月に行われる筑波大学宿舎祭(通称:やどかり祭)を運営する、筑波大学公認サークルです。<br>
          7つの部局で構成されています。<br>
          祭の運営はもちろん、委員内での遊びイベントもたくさんやっています！<br>
          今年度の祭りは新型コロナウイルスの影響で開催中止となってしまいましたが、来年度に向けて新歓は行っていきます！<br>
        </p>
      </div>

      <hr>

      <h3 class="is-size-5 has-text-weight-bold" id="Shinkan-subtitle">
        イベント紹介
      </h3>
      <div class = "Shinkan-events">

        <p class="Shinkan-events-content"> 
          祭の運営はもちろん、委員内での遊びイベントもたくさんやっています！<br>
          <img src="/images/events/torch.jpg" alt="torch-img" id="event-img">
        </p>  

        <p class="Shinkan-events-content">
          ・春・<br>
          お花見、日の出ツアー、ズームインサタデーツアー、部局対抗ボウリング<br>
          ・夏・<br>
          夜景ドライブ、肝試し、球技大会、部局旅行、まつりつくば参加、免許合宿<br>
          ・秋・<br>
          雙峰祭へ出店<br>
          ・冬・<br> 
          クリスマス会、スキー・スノボ旅行、決起旅行<br>
          <br>
          などなど、、書ききれなかったものもたくさんあります。<br>
          気になったら新歓へ！！<br>
        </p>
      </div>

      <hr>

      <h3 class="is-size-5 has-text-weight-bold" id="Shinkan-subtitle">
        部局紹介
      </h3>
      <div class="Shinkan-department">

        <p class="Shinkan-department-content"> 
          ＜全体装飾部局＞<br>
          ・やること<br>
          配色、文章、レスポンシブ化<br>
          ＜総務書記部局＞<br>
          <br>    
          ＜宣伝部局＞<br>
          <br>
        </p>  

        <p class="Shinkan-department-content">
          ＜設備部局＞<br>
          <br>
          ＜模擬店部局＞<br>
          <br>    
          ＜企画部局＞<br>
          <br>
        </p>
           
      </div>

      <hr>


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

#Shinkan-wrap {
  background-color: rgba($color: #231815, $alpha: 0.8);
  color: white;

  #Shinkan-description {
    text-align: left;
  }

  #Shinkan-img-wrap {
    text-align: center;
    width: 100%;
    /*height: 400px;*/
    #Shinkan-img {
      /*height: 100%;*/
      width: 100vh;
    }
  }
  #Shinkan-subtitle{
    text-align: center;
    margin: 20px;
  }


  hr{
    clear: left;
  }
}

/* 左右に要素分けるならこれ踏襲する */
.Shinkan-schedule{
  display: flex;  
  .Shinkan-schedule-content{
    width: 50%;
    margin-bottom: 20px;
  }
}

.Shinkan-events{
  display: flex;
  .Shinkan-events-content{
   width: 50%;
   margin-bottom: 20px;
    #event-img {
      /*height: 100%;*/
      width: 80%;
    }   
   }
 }

.Shinkan-department{
  display: flex;
  .Shinkan-department-content{
    width: 50%; 
    margin-bottom: 20px;
  }
}






</style>