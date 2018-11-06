<template>
  <div class="dividers">
      ---------------<img src="../assets/logo.png" width=14 height=14><span>蔚蓝犀牛</span>---------------
  </div>
</template>

<script>
    export default{
        name:'dividers',
        data () {
            return{}
        }
    }
</script>

<style>
    .dividers{
        width:100%;
        margin:0.05rem 0;
        font-size:14px;
        text-align: center;
        vertical-align: middle;
        opacity: 0.8;
    }
    .dividers img{
        vertical-align: middle;
        margin:0 0.05rem;
    }
    .dividers span{
        vertical-align: middle;
        letter-spacing: 0.05rem;
    }
</style>
