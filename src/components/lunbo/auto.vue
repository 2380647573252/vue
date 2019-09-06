<template>
		<div class="slide">
		<div class="swiper-container oppo">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in img" :key="item.id"><img :src="item" alt="" /></div> 
		    </div>
		</div>
	
	</div>
</template>

<script>
	import "@/assets/css/swiper.css";
	import Swiper from "swiper"
	export default{
		name:'slide',
		data(){
			return{
				img:[
					"https://livewebbs2.msstatic.com/home_recommend_live_app_1566023821.jpg?ips_thumbnail/0/w/700/",
					"https://livewebbs2.msstatic.com/home_recommend_live_app_1525318027.jpg?ips_thumbnail/0/w/700/",
					"https://livewebbs2.msstatic.com/home_recommend_live_app_1565940340.jpg?ips_thumbnail/0/w/700/"
				]
			}
		},
		mounted(){
			
		var mySwiper = new Swiper ('.oppo', {
			    direction: 'horizontal', // 垂直切换选项
			    loop: true, // 循环模式选项
				autoplay:true
			    })        
			}
	}
</script>

<style scoped>
	.oppo{
		width: 100%;
		/* height: 180px; */
		/* z-index: -1; */
	}
	.swiper-wrapper .swiper-slide{
		width: 100% !important;
		margin-right: 0 !important;
	}
	img{
		width: 100%;
		height: 130px;
		vertical-align: middle;
	}
</style>
