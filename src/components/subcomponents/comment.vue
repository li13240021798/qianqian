<template>
  <div class="comment-container">
      <h4>发布评论</h4>
      <hr>
      <textarea placeholder="输入评论的内容"></textarea>
      <mt-button type="primary" size="large" @click="postcomment">发布评论</mt-button>
      <div class="comment-list" v-for="(item, i) in comments" :key="item.add_time" >
          <div class="comment-item">
              <div class="comment-title">
                  第{{i+1}}楼：  用户：{{item.user_name}}  发布时间：{{item.add_time|dataformat}}  
              </div>
              <div class="comment-content">
                     {{item.content}}
                  </div>
          </div>
      </div>
      <mt-button type="danger" size="large" plain  @click="getmore">加载更多</mt-button>
  </div>
</template>


<script>
import {Toast} from 'mint-ui'
export default{
    data(){
        return{
            pageindex:1,
            comments:[]

        }
    },
    created(){
        this.getlistinfo()
    },
    methods:{
        getlistinfo(){
            this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(result=>{
                if(result.body.status===0){


                  this.comments = this.comments.concat(result.body.message);
                }else{
                    Toast('获取失败')
                }
            })

        },
        getmore(){
            this.pageindex++;
            this.getlistinfo();
            
        }
    },
    props:["id"]

}
    
</script>

<style lang="scss" scoped>

.comment-container{
    textarea{
        margin: 0;
        font-size: 14px;
    }
    .comment-list{
        .comment-item{
            font-size: 14px;
            
            .comment-title{
                background-color: #ccc;
                line-height: 30px;
                
            }
            .comment-content{
                text-indent: 2em;

            }

        }

    }
}

</style>
