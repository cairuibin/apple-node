<template>
  <div class="meili_out">
      <div v-for="i in [1,2,3]" :key="i" class="unit">
        <img :src="require('../../assets/team/'+i+'.jpg')"/>
        <div class="txt">
          <h3>ANIKA MOLLIK</h3>
          <p>Chief CEO Officer</p>
        </div>
      </div>
  </div>
</template>
<style scoped>
.meili_out{
  padding: 30px 0 60px;
  width: 100vw;
  min-width: 1000px;
  text-align: center;
  overflow: hidden;
}
.unit{
  width: 30%;
  margin:0 1.5% 0 1%;
  float: left;
  position: relative;
  padding: 0;
  box-sizing: border-box;
  background: orange;
  transition: padding 0.5s;
}
.unit img{
  width: 100%;
  height: 100%;
}
.unit:hover{
 padding: 3% 3% 0 3%;
}
.unit .txt{
  position: absolute;
  top: 90%;
  left: 0;
  right: 0;
  margin: auto;
  height: 100px;
  width: 80%;
  background: #fff;
}
</style>