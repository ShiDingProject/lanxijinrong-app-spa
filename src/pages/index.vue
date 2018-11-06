<template>
  <div class="index">
    <router-view></router-view>
  </div>
</template>

<script>
//  import myfooter from '@/components/footer';

  export default{
    name:'index',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.footer{
  position: fixed;
  bottom:0;
  left:0;
  right:0;
}
</style>
