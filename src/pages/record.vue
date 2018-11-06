<template>
  <div class="record">
    <h3>{{detail.post_title}}</h3>
    <p class="content"
       v-html="detail.post_content"
    >
      {{detail.post_content}}
    </p>
  </div>
</template>

<script>
import FetchDataModule from '../config/fetch';
import ApiDataModule from '../config/axios';

export default{
  name:'record',
  data () {
    return{
      detail:''
    }
  },
  created () {
    // var that = this;
    let query=this.$route.query;
    // FetchDataModule.fetch('GET_ACTITY_DETAILS',{
    //   id:query.id
    // })
    // .then(res =>{
    //   this.detail=res;
    //   console.log(res);
    // })

    ApiDataModule('GET_ACTITY_DETAILS',{
      id:query.id
    })
    .then(res=>{
        console.log(res);
       this.detail=res;
    })
  }
}
</script>

<style scoped>
  .record{
    width: 100%;
    /* height: 100%;
    overflow-y: auto; */
    /* background-color: rgb(244,245,246); */
    background-color: #fff;
  }
  .header{
    position:fixed;
    top:0;
    left:0;
    right:0;
    border-bottom:0.005rem solid rgb(220,220,220);
  }
  .record>h3{
    padding:0 0.15rem;
    padding-top:0.16rem;
    line-height:0.26rem;
    text-align:left;
    font-size:0.2rem;
    color:rgb(70,70,77);
    font-weight: 900;
    font-family: -webkit-pictograph;
  }
  .content{
    padding:0 0.15rem;
    margin-top: 0.15rem;
    line-height:0.22rem;
    font-size:0.14rem;
    text-align:justify;
    color:rgb(93,94,102);
    /*background-color: #fff;*/
  }
</style>
