<template>
  <div class="active_detail">
    <div class="content">
      <h3>{{detail.post_title}}</h3>
      <span class="time">{{detail.create_time}}</span>
      <div class="info">
        <div class="info_title">
          <div class="bar"></div><span class="title">访谈信息</span>
          <div class="active_desc active_title">
            主题：{{detail.post_title}}
          </div>
          <div class="active_desc">
            时间：{{detail.active_time}}
          </div>
          <div class="active_desc">
            地点：{{detail.active_place}}
          </div>
        </div>
      </div>
      <div>
        <img :src="detail.thumb"
             class="previewer-demo-img"
             @click="show(detail.thumb)"
             alt="">
        <div v-transfer-dom>
          <previewer :list="list" ref="previewer" :options="options"></previewer>
        </div>
      </div>
      <div class="info">
        <div class="info_title">
          <div class="bar"></div><span class="title">访谈介绍</span>
          <div class="active_desc active_content"
               v-html="detail.post_excerpt">
            {{detail.post_excerpt}}
          </div>
        </div>
      </div>
      <div class="guest">
        <div class="bar"></div><span class="title">邀请嘉宾-红方</span>
        <ul class="guest_ul">
          <li v-for="(item,index) in detail.red"
              :key="index"
              class="guest_li">
            <div class="guest_name">@{{item.name}}</div>
            <div>{{item.company}} <span>{{duty(item.identity,item.duty)}}</span></div>
            <div>{{industry(item.identity)}}：{{tags(item.tags)}}</div>
          </li>
        </ul>
      </div>
      <div class="guest">
        <div class="bar"></div><span class="title">邀请嘉宾-蓝方</span>
        <ul class="guest_ul">
          <li v-for="(item,index) in detail.blue"
              :key="index"
              class="guest_li">
            <div class="guest_name">@{{item.name}}</div>
            <div>{{item.company}} <span>{{duty(item.identity,item.duty)}}</span></div>
            <div>{{industry(item.identity)}}：{{tags(item.tags)}}</div>
          </li>
        </ul>
      </div>
      <div class="button"
           v-if="!detail.post_content">
        <button>在访谈结束后，可等待查看完整访谈实录</button>
      </div>
      <div class="activeButton"
           v-if="detail.post_content">
        <button @click="jump()">查看访谈实录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import FetchDataModule from '../config/fetch';
  import { Previewer, TransferDom } from 'vux';
  import ApiDataModule from '../config/axios';

  export default{
    name:'active_detail',
    data () {
      return{
        detail:'',
        list: [{
          src: '',
        }],
        options: {
          getThumbBoundsFn () {
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[0]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }
      }
    },
    created () {
      var that = this;
      let query=this.$route.query;
      var params = new URLSearchParams();
      params.append('id', query.id);
      ApiDataModule('GET_ACTITY_DETAILS',params)
      .then(res=>{
        this.detail=res;
      })
      // FetchDataModule.fetch('GET_ACTITY_DETAILS',{
      //   id:query.id
      // })
      // .then( res => {
      //   this.detail=res;
      //   console.log(res);
      // })
    },
    methods:{
      tags(arr){
        console.log(arr);
        return arr.join('、');
      },
      industry(identity){
        if(identity==1){
          return '擅长领域'
        }
        if(identity==2){
          return '所属行业'
        }
      },
      duty(identity,duty){
        if(identity==1){
          return duty;
        }
        if(identity==2){
          return null;
        }
      },
      show (url) {
        this.list[0].src=url;
        this.$refs.previewer.show(0);
      },
      jump(){
        this.$router.push({ path: 'record', query: { id: this.$route.query.id }});
      }
    },
    directives: {
      TransferDom
    },
    components: {
      Previewer
    },
  }
</script>

<style scoped>
  .active_detail{
    width: 100%;
    /* height: 100%;
    overflow-y: auto; */
    /* background-color: rgb(244,245,246); */
    background-color:#fff;
    font-size:0;
  }
  .content{
    overflow: hidden;
    padding:0 0.15rem;
  }
  .active_detail h3{
    /*padding:0 0.15rem;*/
    padding-top:0.13rem;
    text-align:left;
    line-height:0.26rem;
    font-size:0.2rem;
    color:rgb(70,70,77);
    font-weight:900;
    font-family: -webkit-pictograph;
  }
  .time{
    display:inline-block;
    padding:0.15rem 0rem 0.15rem 0rem;
    font-size:0.14rem;
    color:rgb(163,165,174);
    opacity:0.6;
  }
  .bar{
    display: inline-block;
    margin-right:0.08rem;
    vertical-align: middle;
    width: 0.02rem;
    height: 0.16rem;
    background-color: rgb(255,160,0);
  }
  .title{
    vertical-align: middle;
    text-align:left;
    font-size: 0.16rem;
    font-weight: 900;
    font-family: -webkit-pictograph;
    color:rgb(70,70,77);
  }
  .guest{
    margin-top:0.15rem;
  }
  .active_desc{
    line-height: 0.24rem;
    text-align: left;
    font-size:0.14rem;
    color:rgb(93,94,102);
  }
  .active_title{
    margin-top:0.1rem;
  }
  .active_content{
    margin-top:0.15rem;
  }
  .guest_ul{
    margin-top:0.1rem;
  }
  .guest_li{
    text-align: left;
    line-height: 0.24rem;
    font-size:0.14rem;
    color:rgb(93,94,102);
  }
  .guest_li .guest_name{
    font-weight: 700;
    font-family: -webkit-pictograph;
    color:rgb(87,150,202);
  }
  .content img{
    display: block;
    max-width: 100%;
    height:auto;
    margin:0.15rem 0;
  }
  .button{
    padding-top:0.2rem;
    padding-bottom:0.4rem;
  }
  .content button{
    width: 100%;
    height: 0.44rem;
    line-height:0.44rem;
    text-align: center;
    margin: 0 auto;
    border:none;
    outline: none;
    color:#fff;
    border-radius: 1rem;
    font-size:0.16rem;
  }
  .button>button{
    background-color: rgb(174,174,174);
  }
  .activeButton{
    padding-top:0.2rem;
    padding-bottom:0.4rem;
  }
  .activeButton>button{
    background-color: rgb(255,160,0);
  }
  .activeButton>button:hover{
    opacity: 0.5;
  }
</style>
