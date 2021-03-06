<template>
   <section class="Jumbotron">
    <h1 class="theme">お知らせ</h1>
        <hr id="line">
        <p class="content">
        ・第47回やどかり祭は中止となりました。
        </p>
        <hr id="line">
        <p class="content">
        ・新歓実施中!
        </p>
        <hr id="line">
</section>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.Jumbotron {
    color:$BLACK;
    padding:1.5rem;
    background-color: hsl(191, 85%, 73%);
    border: 2px solid;
    border-color: white;
}

.theme {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.125;
}

.line{
    background-color:white;
}

.content{
    width: 100%;
    margin-bottom: 20px;
}


</style>