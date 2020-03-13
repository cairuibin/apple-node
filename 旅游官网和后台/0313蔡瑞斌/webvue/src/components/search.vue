<template>
    <div class="meili_search">
        <div class="search_body">
            <el-input class="inp" v-model="name" placeholder="请输入内容"></el-input>
            <el-select class="inp"  v-model="mouth" placeholder="请选择月份">
                <el-option v-for="item in mouthArr" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-select class="inp" v-model="person" placeholder="请选择人数">
                <el-option v-for="item in personArr" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-select class="inp" v-model="place" placeholder="请选择地点">
                <el-option v-for="(item,index) in placeArr" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <span class="inp btn"  @click="submit">提交</span>
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'',
            mouth:'',
            person:'',
            place:'',
            personArr:[],
            placeArr:[],
            mouthArr:[]
        }
    },
    mounted(){
        let {$httpSuccess} = this;
        $httpSuccess(['get','/travel/list'], data => {
            this.personArr = data.person;
            this.placeArr  = data.place;
            this.mouthArr  = data.mouth;
        })
    },
    methods:{
        async submit(){
            const {name,mouth,person,place,$isNull,dataJson,$httpSuccess} = this;
            let subData = {name,mouth,person,place};
            $isNull([dataJson('名字',name)],()=>$httpSuccess(['post','/travel/submit',subData]))
        }
    }
   
}
</script>
<style scoped>
.meili_search{
    position: absolute;
    bottom: 0;
    width: 1000px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 101;
    background: rgba(255,255,255,0.4);
    height: 140px;
    border-radius: 70px;
}
.search_body{
    padding: 40px 70px;
}
.search_body .inp{
    width: 171px;
    height: 70px;
    line-height: 70px;
    float: left;
}

.search_body .btn{
    text-align: center;
    background: #fff;
    border-radius:4px;
    height: 38px;
    line-height: 38px;
    margin: 15px 0; 
}

.search_body .btn:hover{
   background: orange;
   color: #fff;
}

</style>