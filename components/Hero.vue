<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    やどかり祭
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.hero {
    background-image: url(https://bulma.io/images/placeholders/640x480.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.title {
    color: $BLUE;
}

.date {
    color: $BLACK;
    justify-content: flex-end;
    bottom: 0;
}
</style>