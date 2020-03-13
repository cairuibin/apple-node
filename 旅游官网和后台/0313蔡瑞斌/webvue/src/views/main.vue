<template>
  <div class="main">
    <HeadersTop title="WHY" text="CHOOSE US"/>
    <Choose />
    <Welcome />
    <HeadersTop title="OUR" text="SERVICES"/>
    <Ourserves />
    <HeadersTop title="SPECIAL" text="PACKAGES"/>
    <Special />
    <HeadersTop title="MEET" text="THE GUYS"/>
    <Meeting />
    <HeadersTop title="TOP" text="DESTINATION"/>
    <Destination />
    <HeadersTop title="LATEST" text="POST"/>
    <Last />
  </div>
</template>
<script>
import HeadersTop from '@/components/headerTop'
import Choose from '@/components/home/choose'
import Welcome from '@/components/home/welcome'
import Ourserves from '@/components/home/ourServes'
import Last  from '@/components/home/last.vue'
import Special  from '@/components/home/special.vue'
import Meeting from '@/components/home/meeting.vue'
import Destination from '@/components/home/destination.vue'
export default {
   components: {
        HeadersTop,
        Choose,
        Welcome,
        Ourserves,
        Special,
        Meeting,
        Destination,
        Last
   }
}
</script>
<style scoped>
.main{
  width: 100vw;
}
</style>