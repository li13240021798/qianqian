<template>
  <div class="comment-container">
      <h4>发布评论</h4>
      <hr>
      <textarea placeholder="输入评论的内容"></textarea>
      <mt-button type="primary" size="large">发布评论</mt-button>
      <div class="comment-list">
          <div class="comment-item">
              <div class="comment-title">
                  第一楼：  用户：  发布时间：2012  
              </div>
              <div class="comment-content">
                      hhhhhhh
                  </div>
          </div>
      </div>
      <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>


<script>
    
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
