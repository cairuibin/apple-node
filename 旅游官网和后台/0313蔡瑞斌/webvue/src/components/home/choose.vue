<template>
  <div class="meili_out">
    <div class="bottom">
      <div class="list-child" v-for="i in [0,1,2,3]" :key="i">
        <div class="icon">
            <span class="el-icon-ice-cream-round"></span> 
            <span class="el-icon-ice-cream-round icon_orange"></span> 
        </div>
        <div class="diverse">Diverse Destination</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</div>
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
}
.bottom{
  width: 100%;
  padding: 30px 8%;
  box-sizing: border-box;
  overflow: hidden;
}
.list-child{
  width: 25%;
  float: left;
  padding: 0 2%;
  box-sizing: border-box;
}
.diverse{
  font-size: 20px;
  margin: 15px 0;
}
.text{
  font-size: 14px;
}

.icon{
  font-size: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  background: #f6f6f6;
  position: relative;
}
.icon span{
  display: block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius:50% ;
}
.icon .icon_orange{
  position: absolute;
  background: orange;
  color: #f6f6f6;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 0;
  transition: width .3s;
  -moz-transition:width .3s;
  -webkit-transition: width .3s;
  -o-transition:width .3s
}
.icon_orange::before{
  opacity: 0;
  transition: opacity .3s;
}
.icon:hover .icon_orange{
  width: 80px;
}
.icon:hover .icon_orange::before{
  opacity: 1;
}
</style>
