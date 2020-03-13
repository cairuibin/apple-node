<template>
  <div class="blog">
    <div class="blog_">
      <div class="blog_search">
        <div class="unit_out keyword">
          <el-input placeholder="请输入关键字" v-model="keyword"></el-input>
          <el-button @click="onSearch(keyword,'no')">搜索</el-button>
        </div>
        <div class="unit_out time_sort">
          <h3>近期发布</h3>
          <div class="list" v-for="item in timeList" :key="item.id">
            <span>{{item.title}}</span>
            <strong>{{$transTimer(item.subTime)}}</strong>
          </div>
        </div>
        <div class="unit_out tags">
          <h3>标签</h3>
          <el-tag
            v-for="(i,index) in tags"
            :key="index"
            type="success"
            @click="onSearch(i,'yes')"
          >{{i}}</el-tag>
        </div>
      </div>
      <div class="blog_list">
        <div v-for="item in list" :key="item.id">
          <img src="@/assets/blog/b1.jpg" />
          <div class="icon">
            <span class="el-icon-user-solid"></span>
            <span>{{item.author}}</span>
            <span class="el-icon-grape"></span>
            <span>{{$transTimer(item.subTime)}}</span>
          </div>
          <h2 class="title">{{item.title}}</h2>
          <div class="text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      timeList: [],
      tags: [],
      keyword: ""
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let { $httpSuccess } = this;
      $httpSuccess(["get", "/blog/list"], data => {
        this.list = data.list;
        this.timeList = data.timeList;
        this.tags = data.tags;
      });
    },
    onSearch(keyword, exact) {
      const { $httpSuccess } = this;
      $httpSuccess(
        ["post", "/blog/search", { keyword, exact }],
        data => (this.list = data)
      );
    }
  }
};
</script>
<style scoped>
.blog {
  width: 100vw;
  margin: 80px 0;
}
.blog_ {
  width: 80%;
  min-width: 1000px;
  overflow: hidden;
  margin: 0 auto;
}
.blog_search {
  width: 25%;
  float: left;
}
.blog_list {
  width: 75%;
  float: left;
  box-sizing: border-box;
  padding: 0 2%;
}
.blog_list img {
  width: 100%;
}
.blog_list .icon {
  height: 50px;
  line-height: 50px;
}
.blog_list .icon span {
  margin-right: 10px;
}
.blog_list .title {
  height: 50px;
  line-height: 50px;
  color: orange;
  font-size: 22px;
}
.blog_list .text {
  line-height: 20px;
  font-size: 14px;
  margin: 30px 0 50px;
  box-sizing: border-box;
}
/* 搜索框 */
.unit_out {
  padding: 15px 2%;
  box-sizing: border-box;
  overflow: hidden;
}
.keyword .el-input {
  width: 70%;
  float: left;
}
.keyword .el-button {
  width: 25%;
  float: right;
}

/* 近期发布 */
.time_sort {
  line-height: 20px;
}
.time_sort .list span {
  color: orange;
  display: inline-block;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time_sort .list strong {
  color: gray;
  font-size: 13px;
  float: right;
  text-align: right;
}

/* 标签 */
.tags .el-tag {
  margin: 10px;
}
</style>