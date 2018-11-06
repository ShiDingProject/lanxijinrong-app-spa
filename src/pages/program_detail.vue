<template>
  <div class="detail">
    <h3>{{detailArr.post_title}}</h3>
  
    <span class="date"> 
      <span v-if="show" class="data_span1"><img v-if="detailArr.author.re_identity!=0" :src="detailArr.author.re_identityText"/>{{detailArr.author.re_name}}</span>
      <span class="data_span2">{{detailArr.create_time}}</span>
    </span>
    <div class="content"
         v-html="detailArr.post_content">
      {{detailArr.post_content}}
    </div>
    <c-dividers>  </c-dividers>
  </div>
</template>
<script>
  import FetchDataModule from '../config/fetch';
  import cDividers from '@/components/cDividers.vue';
  import ApiDataModule from '../config/axios';

  export default{
    name:'programDetail',
    data () {
      return {
        detailArr:0,
      }
    },
    computed:{
      show () {
        var that = this;
        if (that.detailArr !== 0&&that.detailArr.author!=null&&that.detailArr.author!="") {
          return true;
        }else{
          return false;
        }
      }
    },
    created () {
      // this.initData();
      var that =this;
      let query=this.$route.query;
      console.log(query);
      var params = new URLSearchParams();
      params.append('id', query.id);
      ApiDataModule('GET_ARTICLE_DETAILS',params)
            .then(res=>{
              res.create_time=res.create_time.split(" ")[0];
              res.create_time=res.create_time.replace("-","年");
              res.create_time=res.create_time.replace("-","月")+'日';
              if(res.author){
                if(res.author.re_identity==0){
                  res.author.re_identityText="普通";
                  res.author.re_identityText="/static/img/pu@2x.png";
                }else if(res.author.re_identity==1){
                  res.author.re_identityText="专家";
                  res.author.re_identityText="/static/img/zhuan@2x.png";
                }else if(res.author.re_identity==2){
                  res.author.re_identityText="企业";
                  res.author.re_identityText="/static/img/qi@2x.png";
                } 
              }
              
              this.detailArr=res;
              console.log('detail',res);
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
    padding:0.3rem 0.15rem 0.17rem 0.15rem;
    font-size:0.14rem;
    color:#ccc;
    opacity:0.6;
    width: 100%;
    line-height: 0.16rem;
    position: relative;
  }
  .data_span1{
    display:inline-block;
    width: 60%;
    position: absolute;
    top: 0.3rem;
    left: 0.15rem;
    color: #333;
  }
  .data_span1>img{
    height: 0.16rem;
    vertical-align: top;
    display: inline-block;
    margin-right: 2%;
  }
  .data_span2{
    display:inline-block;
    width: 100%;
    text-align: right;
    color: #333;
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
