<template>
  <div class="home">
    <Top />
    <router-view/>
    <Bottom />
  </div>
</template>

<script>

import Top from '@/components/top.vue'
import Bottom from '@/components/bottom.vue'
export default {

  components: {
    Top,
    Bottom
  }
}
</script>
<style scoped>
.home{
  min-width: 1180px;
}
</style>
