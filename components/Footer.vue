<template>
    <section>
        <div class="thefooter">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <p></p>
                    </div>
                    <div class="column">
                        <div class="contents">
                            <p class="item">トップ</p>
                            <div class="line">
                                <p>こんな感じ&nbsp;アクセス&nbsp;こんな感じ&nbsp;どうかな&nbsp;どうかな&nbsp;どうかな</p>
                            </div>
                        </div>
                        <div class="blank"></div>
                        <div class="contents">
                            <p class="item">お祭り情報</p>
                            <div class="line">
                                <p>アクセス&nbsp;マップ&nbsp;タイムテーブル&nbsp;模擬店&nbsp;企画&nbsp;浴衣コンテスト</p>
                            </div>
                        </div>                
                    </div>
                    <div class="column">
                        <div class="column-left">
                            <div class="social-icons">
                                <span class="fa-stack fa-lg social-icon">
                                    <fa-icon :icon="['far', 'circle']" class="fa-stack-2x"/>
                                    <fa-icon :icon="['fab', 'twitter']" class="fa-stack-1x"/>
                                </span>
                                <p>@yadokari_sai</p>
                            </div>
                            <div class="social-icons">
                                <span class="fa-stack fa-lg social-icon">
                                    <fa-icon :icon="['far', 'circle']" class="fa-stack-2x"/>
                                    <fa-icon :icon="['fas', 'envelope']" class="fa-stack-1x"/>
                                </span>
                                <p>yadosai.tkb@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="content has-text-centered">
                <p>©第47回宿舎祭実行委員会<br>
                当サイトでは、アクセスログの収集・解析にGoogle アナリティクスを使用しております。
Google アナリティクスではCookieを使用し、個人を特定する情報を含まずにログを収集しております。また、収集されるログはGoogleのプライバシーポリシーに基づいて管理されます。</p>
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
        margin: 1em 1em;
        font-size: 1em;
    }
}
.blank{
    height: 1em;
}

.item{
    width: 6em;
}
.line{
    border-left: 0.1em solid $WHITE;
    padding-left: 0.1em;
}
.content{
    width: 30rem;
    font-size:0.5em;
    margin:0 auto;
    padding-top: 3em;
}

.column-left{
    display: flex;
    justify-content:space-around;
}
.social-icons{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
.social-icon{
    font-size: 4em;
}



</style>