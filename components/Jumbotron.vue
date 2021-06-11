<template>
   <section>
   <div class="Jumbotron">    
     <div class="notice">お知らせ</div>
        <hr id="j-line">
        <p class="content">
        ・第47回やどかり祭は中止となりました。来年の開催をお楽しみに！
        </p>
        <hr id="j-line">
        <p class="content">
        ・今年度の新歓は終わりました。
        </p>
        <hr id="j-line">
     </div>
    </div>
</section>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.Jumbotron {
    background-color: #89cfeb;
    border-color: white;
}

.notice {
  font-size: 2rem !important;
  background-color: #89cfeb;
}

.j-line{
    background-color:white;
}

.content{
    width: 100%;
    margin-bottom: 20px;
}


</style>