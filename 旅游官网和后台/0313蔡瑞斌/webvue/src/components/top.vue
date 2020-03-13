<template>
  <div class="top">
    <Header @changeIsShow="changeIsShow" />
    <Search v-show="isShow" />
    <Swipers v-show="isShow" />
    <ImageBg v-show="!isShow" />

    <div v-if="scroll>550" class="suction_top" @click="goBackTop">
      <span class="el-icon-arrow-up"></span>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Swipers from "@/components/swipers.vue";
import ImageBg from "@/components/imageBg.vue";
import Search from "@/components/search.vue";
export default {
  data() {
    return {
      scroll: 0,
      isShow:
        sessionStorage.getItem("nowNav") === "first" ||
        sessionStorage.getItem("nowNav") === null
          ? true
          : false
    };
  },
  components: {
    Header,
    Swipers,
    Search,
    ImageBg
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  },
  methods: {
    changeIsShow(val) {
      this.isShow = val;
    },
    getScrollTop() {
      this.scroll = document.documentElement.scrollTop;
    },
    goBackTop() {
      if (document.documentElement.scrollTop > 30) {
        setTimeout(() => {
          this.scroll -= 30;
          document.documentElement.scrollTop -= 30;
          this.goBackTop();
        }, 20);
      } else {
        document.documentElement.scrollTop = 0;
        this.scroll = 0;
        return;
      }
    }
  }
};
</script> 
<style scoped>
.top {
  position: relative;
}
.suction_top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  background: orange;
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}
</style>