<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <!-- <img src="images/main/logo.png" class="logo" /> -->
        やどかり祭
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isMenuActive }"
        data-target="navbar"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-end">
        <!-- <nuxt-link to="/info" class="navbar-item"> -->
        <div class="navbar-item navlink">お知らせ</div>
        <!-- </nuxt-link>-->
        <!-- <nuxt-link to="/shinkan" class="navbar-item">-->
        <div class="navbar-item navlink">新歓情報</div>
        <!-- </nuxt-link>-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      isMenuActive: false
    }
  },
  watch: {
    $route() {
      this.isMenuActive = false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $BLACK;
}
/* リンクが張れるようになったら、ここを消す*/
.navlink {
  color: #757373;
}
/* リンクが張れるようになったら、ここを消す*/
.logo {
  /*height: 90px;
  width: 170px;*/
}
</style>
