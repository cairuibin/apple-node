<template>
    <div class="product">
            <div class="search_list">
                <el-input class="inp" v-model="place" placeholder="请输入目的地"></el-input>
                <el-input class="inp" v-model="keyword" placeholder="请输入关键字"></el-input>
                <el-select class="inp" v-model="star">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in [1,2,3,4,5]" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-select class="inp" v-model="day">
                     <el-option value=''>请选择</el-option>
                    <el-option v-for="(item,index) in [3,4,5,6,7]" :key="index" :label="item" :value="item"></el-option>
                </el-select>
                <span class="inp btn" @click="searchData">提交</span>
            </div>
            <div>
                <span @click="initData">全部</span>|
                <span @click="searchData('star')">按星级排序</span>|
                <span @click="searchData('day')">按时间排序</span>|
                <span @click="searchData('place')">按名称排序</span>
            </div>
            <div class="product_list">
                <div class="product_unit" v-for="item in list" :key="item.id" @click="jumpDetail(item)">
                    <p>{{item.place}}</p>
                    <div>
                        <span v-for="i in [1,2,3,4,5]" :key="i" :class="[i<=item.star?'orange':'','el-icon-star-off'].join(' ')"></span>
                    </div>
                    <p>{{item.day}}天{{item.night}}晚</p>
                    <p>{{item.describe}}</p>
                </div>
            </div>
        </div>
   
</template>
<script>
export default {
    data(){
        return{
            place:'',
            keyword:'',
            star:'',
            day:'',
            list:[]
        }
    },
    mounted(){
       this.initData()
    },
    methods:{

        initData(){
            let {$httpSuccess} = this;
            $httpSuccess(['get','/product/list'], data => this.list = data)
        },

        searchData(dataSort='default'){
            const {place,keyword,star,day,$httpSuccess,$message} = this;
            let subData = {place,keyword,star,day,dataSort};
            if(Object.keys(subData).some(item=>subData[item])){
                $httpSuccess(['post','/product/serach',subData], data => this.list = data)
                return
            }
            $message.warning('搜索项不能为空')
        },

        jumpDetail(item){
            this.$router.push({name:'detail',params:item})
        }
    }
}
</script>
<style scoped>

.search_list{
    padding: 30px 70px;
    box-sizing: border-box;
    width: 1000px;
    margin: 50px auto;
    background: #d8d8d8;
    height: 140px;
    border-radius: 70px;
}

.search_list .inp{
    width: 171px;
    height: 70px;
    line-height: 70px;
    float: left;
}

.search_list .btn{
    text-align: center;
    background: #fff;
    border-radius:4px;
    height: 38px;
    line-height: 38px;
    margin: 15px 0; 
}

.search_list .btn:hover{
   background: orange;
   color: #fff;
}
.product_unit{
    width: 1100px;
    margin: 30px auto;

}
.orange{
    color:orange
}

</style>