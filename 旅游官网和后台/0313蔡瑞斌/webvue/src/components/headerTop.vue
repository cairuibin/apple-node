<template>
  <div class="headers">

      <div class="top">
        <h1>{{title}}<span class="orange">{{text}}</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
        <h1><img src="@/assets/img/1.png" alt srcset /></h1>
      </div>
  </div>
</template>
<script>
export default{
  props:['title','text']
}
</script>
<style scoped>
.headers{
  padding:60px 0 30px;
  width: 100vw;
  min-width: 1000px;
  text-align: center;
}
.orange{
  color: orange;
  margin-left: 10px;
}
</style>