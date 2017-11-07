<template>
  <div class="newsinfodiv" style="padding: 0 3px">
      <h4 class="title" style="font-size:22px">{{newsinfo.title}}</h4>
      <p class="infotime">
          <span>发布时间：{{newsinfo.add_time|dataformat}}</span>
          <span>点击：{{newsinfo.click}}次</span>
      </p>
      <hr>
      <div class="content" v-html="newsinfo.content" style="width:100%"></div>

      <!-- 评论子组件 -->
      <comment-box></comment-box>
  </div>
</template>


<script>
import comment from '../subcomponents/comment.vue'
import { Toast } from "mint-ui";


export default {
  data() {
    return {
      newsinfo: {} // 新闻数据
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      // 1. 获取到 当前新闻的 Id
      // 2. 发送数据请求，获取新闻数据
      // 3. 把新闻数据，保存到 data 上
      // 4. 渲染页面
      var id = this.$route.params.id;
      // Pormise 的使用
      this.$http.get("api/getnew/" + id).then(result => {
        if (result.body.status === 0) {
          // 将新闻数据保存到 data
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻详情失败！");
        }
      });
    }
  },
  components:{
      "comment-box":comment
  }
 
};
</script>


<style lang="sass" >



</style>
