<template>
   <section>
   <div class="Jumbotron">    
     <div class="notice">お知らせ</div>
        <hr id="j-line">
        <p class="content">
        ・第47回やどかり祭は中止となりました。
        </p>
        <hr id="j-line">
        <p class="content">
        ・新歓実施中!
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
    padding:1.5rem;
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