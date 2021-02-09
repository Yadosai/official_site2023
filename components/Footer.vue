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
            <p>丸で囲んだ数字
                <span class="fa-stack fa-lg">
					<i class="fa fa-circle fa-stack-2x"></i>
					<i class="fa fa-inverse fa-stack-1x">1</i>
				</span>
            </p>
            <font-awesome-icon icon="download"/>
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
        font-size: 0.7em;
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

</style>