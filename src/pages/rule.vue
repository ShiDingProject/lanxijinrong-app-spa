<template>
  <div class="rule">
    <div class="title">CIO红椅子蓝椅子线下访谈</div>
    <div class="rule_detail">
      <h3>访谈规则</h3>
      <div class="content">
        <p>1. 红方即在访谈中坐在红椅子的一方，通常以专家团队为主。负责对本次的访谈话题加以评判、分析与推荐。</p>
        <p>2. 蓝方即在访谈中坐在蓝椅子的一方，通常以企业团队为主。属于访谈话题的发起方。负责对话题进行解析和宣传。</p>
        <p>3. 红蓝双方可根据每期的话题不同进行交叉互换。</p>
      </div>
    </div>
    <img src='../assets/Group3@2x.png' class="bagimg"/>
  </div>
</template>

<script>
export default {
  name:'rule',
  data () {
    return{

    }
  },
  created () {

  }
}
</script>

<style lang="css" scoped>
  body{
    position: relative;
  }
  .rule{
    /* width: 375px;
    height: 667px; */
    /* background-image: url(../assets/Group3@2x.png);
    background-repeat: repeat-y; */
    /* background-size: cover; */
  }
  .bagimg{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgb(244,245,246);
    z-index:2;
  }
  .title{
    position: absolute;
    top:0.39rem;
    left: 50%;
    margin-left: -1.41rem;
    z-index:3;
    font-size:0.24rem;
    color:#fff;
  }
  .rule_detail{
    position: absolute;
    top:1.3rem;
    /* left:0.75rem; */
    left: 50%;
    margin-left: -1.235rem;
    width:2.47rem;
    z-index:3;
  }
  .rule_detail h3{
    margin-bottom: 0.1rem;
    font-size: 0.16rem;
    text-align: left;
    font-weight: bold;
    color:rgb(70,70,77);
  }
  .content p{
    margin-bottom: 0.2rem;
    line-height: 0.24rem;
    font-size: 0.14rem; 
    text-align:justify;
    color:rgb(93,94,102);
  }
  .content p:last-child{
    margin-bottom: 0
  }
  @media screen and (max-width: 320px) {
    .content{
      padding:0 0.1rem;
    }
    .rule_detail h3{
      padding:0 0.1rem;
    }
  }
  @media screen and (min-width: 500px) and (max-width:1024px){
    .rule_detail{
      top:2.3rem;
    }
    .title{
      top:0.69rem;
    }
  }
  @media screen and (min-width: 1024px) and (max-width:1030px){
    .rule_detail{
      top:3.3rem;
      font-size:0.2rem;
    }
    .title{
      top:0.99rem;
    }
  }
  @media screen and (min-width:1030px){
    .rule_detail{
      top:2.3rem;
      font-size:0.2rem;
    }
    .title{
      top:0.59rem;
    }
  }
</style>
