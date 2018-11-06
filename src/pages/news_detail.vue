<template>
  <div class="detail">
    <h3>{{detailArr.n_title}}</h3>
    <span class="date">{{detailArr.create_time}}</span>
    <div class="content"
         v-html="detailArr.n_content">
      {{detailArr.n_content}}
    </div>
    <c-dividers>  </c-dividers>
  </div>
</template>
<script>
import FetchDataModule from "../config/fetch";
import cDividers from "@/components/cDividers.vue";
import ApiDataModule from "../config/axios";

export default {
  name:'news',
  data() {
    return {
      detailArr: {}
    }
  },
  created() {
    let query = this.$route.query;
    let a = {
      id:1
    }
    const formData = new FormData();
    formData.append('id',query.id);

    var params = new URLSearchParams();
    params.append('id', 1);

    ApiDataModule("GET_NEWS_DETAIL", params).then(res => {
      this.detailArr = res;
    });
  },
  components: {
    cDividers
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  background-color: #fff;
  font-size: 0;
}
.detail > h3 {
  padding: 0 0.15rem;
  padding-top: 0.16rem;
  text-align: left;
  line-height: 0.26rem;
  font-size: 0.2rem;
  color: rgb(70, 70, 77);
  font-weight: 600;
}
.detail > .content > p > img {
  width: 100%;
}
.date {
  display: inline-block;
  padding: 0.13rem 0.15rem 0 0.15rem;
  font-size: 0.14rem;
  color: rgb(163, 165, 174);
  opacity: 0.6;
}
.content {
  padding: 0 0.15rem;
  margin-top: 0.1rem;
  line-height: 0.24rem;
  font-size: 0.14rem;
  text-align: justify;
  color: rgb(93, 94, 102);
}
.content img {
  display: block;
  height: auto;
  max-width: 100%;
}
</style>
