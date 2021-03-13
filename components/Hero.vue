<template>
    <section class="hero-img">
        <div class="hero-img-body">
            <h1 class="title">
                やどかり祭
            </h1>
        </div>
        <BezierSvg1/>
    </section>
</template>

<script>
import BezierSvg1 from '@/static/images/Curve.svg'
export default {
    components:{
        BezierSvg1
    }
}
</script>

<style lang="scss">

.hero-img{
    background-image: url(/images/info/sample2.jpg);
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
}
.hero-img-body {
    flex-grow: 1;
}
.title {
    position: relative;
    top: 50%;
    color: white;
    text-align: center;
}
</style>