<template>
    <div>
        <!--このdivの間にかいていってね-->
      <div class="card is-4">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{card_title}}</p>
            </div>
          </div>

          <div class="content">
            {{card_content}}
          </div>
        </div>
      </div>

    </div>
</template>
<script>
export default {
     props: {
    card_title: {
       type: String,
      default: 'タイトル',
    }
 },
 props:{
   card_content:{
     type: String,
     default:'内容'
   }
 }
}
</script>
<style lang="scss" scoped>

</style>