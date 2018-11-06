import Vue from 'vue';
import Router from 'vue-router';
// import App from '@/App';
// import Record from '@/pages/record';
// import ProgramDetail from '@/pages/program_detail';
// import Register from '@/pages/register';
// import ForgetPassword from '@/pages/forget_password';
// import Sign from '@/pages/sign';
const App = resolve => require(['@/App'], resolve);
const Record = resolve => require(['@/pages/record'], resolve);
const ProgramDetail = resolve => require(['@/pages/program_detail'], resolve);
const activeDetail = resolve => require(['@/pages/active_detail'], resolve);
const topicDetail = resolve => require(['@/pages/topic_detail'], resolve);
const helpDetail = resolve => require(['@/pages/help_detail'], resolve);
const newsDetail = resolve => require(['@/pages/news_detail'], resolve);
const Rule = resolve => require(['@/pages/rule'], resolve);
const Question = resolve => require(['@/pages/question'],resolve);



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: App,//顶层路由
      children:[
        //地址为空时跳转record
        {
          path:'',
          redirect: '/detail'//访谈实录
        },
        {
          path:'/record',
          component:Record
        },
        {
          path: '/detail',//文章详情
          component: ProgramDetail
        },
        {
          path: '/active',//活动详情
          component: activeDetail
        },
        {
          path: '/news',//新闻详情
          component: newsDetail
        },
        {
          path: '/topic',//话题详情
          component: topicDetail
        },
        {
          path:'/help',//帮助详情
          component: helpDetail
        },
        {
          path: '/rule',//访谈规则
          component: Rule
        },
        {
          path:'/question',
          component: Question
        }
      ]
    }
  ]
});
