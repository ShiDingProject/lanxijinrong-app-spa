<template>
  <div class="topic">
      <div class="content" v-html="content">
          {{content}}
    </div>
  </div>
</template>

<script>
    import FetchDataModule from '../config/fetch'
    import ApiDataModule from '../config/axios';

    export default{
        name:'topic',
        data () {
            return {
                content:{}
            }
        },
        created () {
            var that = this;
            let query=this.$route.query;

            // FetchDataModule.fetch('GETTOPICINFO',{
            //     id:query.id
            // })
            // .then(res=>{
            //     this.content=res.info.topic_content;
            //     console.log(res);
            // })
          var params = new URLSearchParams();
          params.append('id', query.id);
            ApiDataModule('GETTOPICINFO',params)
            .then(res=>{
                this.content=res.info.topic_content;
            })
        }
    }
</script>

<style>
.topic{
    padding:0.15rem 0.15rem 0 0.15rem;
}
</style>
