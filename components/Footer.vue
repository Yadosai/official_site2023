<template>
  <section>
    <div class="footer-curve">
      <BezierSvg2 />
    </div>
    <div class="thefooter">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p></p>
          </div>
          <div class="column">
            <div class="contents">
              <p class="item">企画</p>
              <div class="line">
                <p>
                  ゆかたコンテスト&nbsp;火文字&nbsp;大学生クイズ&nbsp;野外ライブ&nbsp;ダンス
                </p>
              </div>
            </div>
            <div class="blank"></div>
            <div class="contents">
              <p class="item">お祭り情報</p>
              <div class="line">
                <p>やどかり祭とは&nbsp;新歓について&nbsp;ニュース</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="column-left">
              <div class="social-icons" @click="externalLink">
                <span class="fa-stack fa-lg social-icon">
                  <fa-icon :icon="['far', 'circle']" class="fa-stack-2x" />
                  <fa-icon :icon="['fab', 'twitter']" class="fa-stack-1x" />
                </span>
                <p>@yadokari_sai</p>
              </div>
              <div class="social-icons">
                <span class="fa-stack fa-lg social-icon">
                  <fa-icon :icon="['far', 'circle']" class="fa-stack-2x" />
                  <fa-icon :icon="['fas', 'envelope']" class="fa-stack-1x" />
                </span>
                <p>yadosai.tkb@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <p class="has-text-centered p-4">
            ©第48回宿舎祭実行委員会<br />
            当サイトでは、アクセスログの収集・解析にGoogle
            アナリティクスを使用しております。<br />
            GoogleアナリティクスではCookieを使用し、個人を特定する情報を含まずにログを収集しております。<br />
            また、収集されるログはGoogleのプライバシーポリシーに基づいて管理されます。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BezierSvg2 from '@/static/images/Curve2.svg'
export default {
  components: {
    BezierSvg2
  },
  methods: {
    externalLink() {
      const url = 'https://twitter.com/yadokari_sai'
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-curve {
  background-color: $BLACK;
}
.thefooter {
  background-color: $BLACK;
  background-size: cover;
  color: $WHITE;
  padding: 1em 5em 2em;
}

.contents {
  display: flex;
  p {
    margin: 1em 1em;
    font-size: 1rem;
  }
}
.blank {
  height: 1em;
}

.item {
  width: 6em;
}
.line {
  border-left: 0.1em solid $WHITE;
  padding-left: 0.1em;
}
.content {
  width: 30rem;
  font-size: 0.5em;
  margin: 0 auto;
  padding-top: 3em;
}

.column-left {
  display: flex;
  justify-content: space-around;
}
.social-icons {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.social-icon {
  font-size: 4em;
}

a:link {
  text-decoration: none !important;
  color: #WHITE !important;
}
</style>
