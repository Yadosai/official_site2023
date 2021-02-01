<template>
    <section>
        <div class="thefooter">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <p></p>
                    </div>
                    <div class="column">
                        <!--<div class="contents">
                            <p>お祭り情報</p>
                            <div style="background-color:gray; width:2px; height:40px;"></div>
                            <p>こんな感じ&nbsp;アクセス&nbsp;こんな感じ&nbsp;どうかな</p>
                        </div> -->
                        <ul>
                            <li>
                                <h2>トップ</h2>
                            </li>
                            <li>
                                <h2>チャットサポート</h2>
                                <p>チャットサポートでは毎日のサポート時間内に随時質問ができ、即回答をもらうことができます。</p>
                            </li>
                        </ul>                        
                    </div>
                    <div class="column">
                        <p>どうもどうも</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.thefooter{
    background-image: url('/images/main_image.jpeg'); 
    background-size: cover;
    color: #ffffff
}
.contents{
    display: flex;
    p{
        margin: 0.5em;
    }
}

ul{
  list-style:none;
  width:100%;
  display:flex;
  justify-content:space-between;
  li{
    width:48%;
    padding:0 10px;
    &:first-child{ 
      border-right:1px solid #ccc;
    }
    h2{
      font-size:16px;
    }
    p{
      font-size:12px
    }
  }
}
</style>