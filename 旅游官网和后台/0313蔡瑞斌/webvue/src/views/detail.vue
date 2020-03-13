<template>
    <div class="detail">

        <div class="detail_title">
            {{pro.place}}
            <span>————{{pro.discount}}</span>
        </div>

        <div class="detail_list">
            <div v-for="item in overView" :key="item.id" class="detail_unit">
                <div class="unit_a">
                    <span>{{item.day}}天</span><span>{{item.night}}晚</span>
                </div>
                <div class="unit_b"></div>
                <div class="unit_c">
                    <h2>{{item.place}}</h2>
                    {{item.detail}}
                    </div>
                <div class="unit_d">
                    <img src="@/assets/product.jpg"/>
                </div>
            </div>
        </div>
       

    </div>
</template>
<script>
export default {
    data(){
        return {
            pro:this.$route.params,
            overView:[]
        }
    },
    mounted(){
        this.initData()
    },
    methods:{

        initData(){
            let {$httpSuccess,pro} = this;
            $httpSuccess(['post','/product/detail',{id:pro.id}], data => this.overView = data)
        }
    }
}
</script>
<style scoped>
.detail_title{
    min-width: 1000px;
    width: 90%;
    font-size: 30px;
    color: orange;
    font-weight: 600;
    margin: 30px auto;
}
.detail_title span{
    padding-left: 80px;
}
.detail_list{
    width: 100vw;
}
.detail_unit{
    min-width: 1000px;
    width: 90%;
    margin: 30px auto;
    overflow: hidden;
    position: relative;
}
.detail_unit div{
    float: left;  
}
.unit_a{
    min-width:80px;
    width: 8%;
    
}
.unit_b{
    width:20px;
    height: 20px;
    background: orange;
    position: absolute;
    top: 30px;
    left: 7.4%;
    transform:rotate(45deg);
}
.unit_c{
    min-width:500px;
    width: 50%;
    padding: 15px 30px;
    box-sizing: border-box;
    border-left: 4px solid orange;

}
.unit_d{
     width: 42%;
     min-width: 420px;
}
.unit_d img{
    width: 100%;
}

</style>