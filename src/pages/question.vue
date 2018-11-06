<template>
  <div class="detail">
    <h3>{{detailArr.q_question}}</h3>
    <!-- <span class="date">{{detailArr.create_time}}  &nbsp;&nbsp;<span v-show="detailArr.information_author">作者：{{detailArr.information_author}}</span></span> -->
    <div class="content"
         v-html="detailArr.q_des">
      {{detailArr.q_des}}
    </div>
    <c-dividers>  </c-dividers>
  </div>
</template>
<script>
  import FetchDataModule from '../config/fetch';
  import cDividers from '@/components/cDividers.vue';
  import ApiDataModule from '../config/axios';

  export default{
    name:'question',
    data () {
      return {
        detailArr:{},
      }
    },
    created () {
      // this.initData();
      var that =this;
      let query=this.$route.query;
      // console.log(query);
      var params = new URLSearchParams();
      params.append('id', query.id);
      ApiDataModule('GET_ANSWER_DETAILS',params)
      .then(res=>{
        this.detailArr=res;
        console.log('问题',res);
      })
    },
    methods:{
      // async initData(){
      //   let query=this.$route.query;
      //   await FetchDataModule.fetch('GET_ARTICLE_DETAILS',{
      //     id:query.id
      //   })
      //   .then( res => {
      //     this.detailArr=res;
      //     console.log(res,'123')
      //   })
      // }
    },
    components:{
      cDividers
    }

  }
</script>

<style scoped>
  .detail{
    width: 100%;
    /* height: 100%; */
    /* overflow-y: auto; */
    /* background-color: rgb(244,245,246); */
    background-color:#fff;
    font-size:0;
  }
  .detail>h3{
    padding:0 0.15rem;
    padding-top:0.16rem;
    text-align:left;
    line-height:0.26rem;
    font-size:0.2rem;
    color:rgb(70,70,77);
    font-weight:600;

  }
  .detail>.content>p>img{
    width: 100%;
  }
  .date{
    display:inline-block;
    padding:0.13rem 0.15rem 0 0.15rem;
    font-size:0.14rem;
    color:rgb(163,165,174);
    opacity:0.6;
  }
  .content{
    padding:0 0.15rem;
    margin-top: 0.10rem;
    line-height:0.24rem;
    font-size:0.14rem;
    text-align:justify;
    color:rgb(93,94,102);
  }
  .content img{
    display: block;
    height: auto;
    max-width: 100%;
  }
</style>
