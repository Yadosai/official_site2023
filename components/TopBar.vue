<template>
  <header>
    <v-app-bar 
      app
      dark
      fixed
    >
      <v-app-bar-nav-icon @click="drawer = true" class="d-xs-inline d-md-none"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-black">やどかり祭</v-toolbar-title>
      <v-tabs right class="d-none d-md-block">
        <v-tab>お知らせ</v-tab>
        <v-tab>新歓情報</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-img src="/images/yadokari_icon.png" alt="yadokari_icon"></v-img>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-black">
            ようこそ、やどかり祭へ
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>お知らせ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>新歓情報</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
 
.v-tabs {
  padding-right: 36px;
}
</style>