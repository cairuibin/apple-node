<template>  
<div class="meili_swiper_out">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in [1,2,3]" :key="item">
                <img :src="require('../assets/bg/'+item+'.jpg')"/>
            </div>     
        </div>
    </div>
    <div class="black"></div>
    <div class="swiper-pagination"></div>
</div>
   
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
    mounted(){
        new Swiper('.swiper-container', {
            autoplay: true,
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            }
        })
    }
}
</script>
<style >
.meili_swiper_out{    
    min-width: 1180px;
    position: relative;
    width: 100vw;
}
.meili_swiper_out .swiper-container{
    width: 100%;
}
.meili_swiper_out img{
    width: 100%;
}
.meili_swiper_out .black{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    pointer-events: none;
}
.meili_swiper_out .swiper-pagination{
     position: absolute;
    top: 50%;
    left:10%;
    bottom: 50%;
    right: 90%;
    z-index: 21;
}
.meili_swiper_out .swiper-pagination .swiper-pagination-bullet{
    display: block;
    margin: 10px;
    background: #fff;
    border-radius:0;
    width: 12px;
    height: 4px;
    transition:width 0.5s;
}
.meili_swiper_out .swiper-pagination .swiper-pagination-bullet-active{
    width: 30px;
    background:orange;
    outline: none;
}


</style>