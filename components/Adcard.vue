<template>
  <section>
    <div>
        <div class="box row">
         <a href="https://yadosai.com" target="_blank">
             <img src="https://bulma.io/images/placeholders/640x480.png" alt="sponsor" class="web-ad-content">
         </a>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.row{
  display: flex;
  flex-wrap: wrap;
}
.box {
  padding: 0.5em;
  margin: 0.5em 1em;
  border-radius: 10px;
}
.box:hover {
  box-shadow: 0px 0px 0px 0px black;
}
.web-ad-content {
  height: 148px;
  width: 228px;
  text-align: center;
}
</style>
