<template>
  <div class="help">
      <div class="ask">
          <span class="title">问</span>
          <div class="text">
              {{info.title}}
          </div>
      </div>
      <div class="answer">
          <span class="title">答</span>
          <div class="content-tetx">
              <span class="time">
                  {{info.creat_time}}
              </span>
              <div class="content" v-html="info.content">
                  {{info.content}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import FetchDataModule from '../config/fetch';
    import ApiDataModule from '../config/axios';


    export default{
        name:'help',
        data () {
            return {
                info:{}
            }
        },
        created () {
            var that = this;
            let query=this.$route.query;
          var params = new URLSearchParams();
          params.append('id', query.id);
            // FetchDataModule.fetch('HELP_INFO',{
            //     id:query.id
            // })
            // .then(res=>{
            //     console.log(res);
            //     this.info=res.info;
            // })
            ApiDataModule('HELP_INFO',params)
            .then(res=>{
                this.info=res.info;
            })

        }
    }
</script>

<style scoped>
.help{
    font-size:0;
    padding:0.15rem 0.15rem;
    background-color:rgb(244,245,246);
}
.title{
    text-align: left;
    font-size:0.14rem;
    color:rgb(121,122,128);
}
.text{
    margin-top:0.05rem;
    padding:0.15rem 0.15rem;
    text-align: left;
    font-size:0.14rem;
    line-height: 0.22rem;
    color:rgb(93,94,102);
    border-left:0.02rem solid rgb(200,201,204);
    background-color: #fff;
}
.answer{
    margin-top:0.15rem;
}
.content-tetx{
    position: relative;
    margin-top:0.05rem;
    background-color:#fff;
}
.content{
     padding:0.15rem 0.15rem;
    border-left:0.02rem solid rgb(255,160,0);
}
.time{
    position: absolute;
    top:-0.12rem;
    right:0;
    font-size:0.12rem;
    color:rgb(200,201,204);
}
</style>
