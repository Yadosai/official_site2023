<template>
    <section class="hero-img">
        <div class="hero-img-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    やどかり祭
                </h1>
            </div>
        </div>
        <div class="curve-hero">
            <BezierSvg1/>
        </div>
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
/*
.hero {
    background-image: url(/images/info/sample2.jpg);
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
*/

.hero-img{
    background-image: url(/images/info/sample2.jpg);
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.title {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: $BLUE;
    margin: 0;
    padding: 0;
}
.curve-hero{
    position: absolute;
    bottom: 0;
}
</style>