<template>
  <div>
      
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发布时间：{{item.add_time|dataformat}}</span>
                                <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			

			</ul>
  </div>
</template>

<script>
import {Toast } from 'mint-ui'
    export default{
        data(){
            return{
         newlist:[]
            }
        },
        created(){
          this.getlist()
        },
        methods:{
            getlist(){
                this.$http.get('api/getnewslist').then(result=>{
                    if(result.body.status===0){
                        this.newlist=result.body.message
                        

                    }else{
                        Toast('获取列表失败')
                        
                    }
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
.mui-media-body{
    h1{
        font-size: 14px;
    }

}
.mui-ellipsis{
    color: blue(#333);
    font-size: 12px;
    display: flex;
    justify-content: space-between;
   
}

</style>

