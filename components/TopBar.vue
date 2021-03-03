<template>
  <nav
    class="navbar is-black is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">やどかり祭</nuxt-link>

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
        <nuxt-link to="/info" class="navbar-item">お知らせ</nuxt-link>
        <nuxt-link to="/shinkan" class="navbar-item">新歓情報</nuxt-link>
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

<style lang="scss" scoped></style>
