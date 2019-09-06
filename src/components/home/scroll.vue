<template>
	<div class="wrapper" ref="aaa">
		<div class="content" >
			<slot></slot>
				</div>
			</div>
</template>

<script>
	import Bscroll from "better-scroll"
	export default{
		mounted() {
			this.bs=new Bscroll(this.$refs.aaa,{
				probeType:3,
			})
		},
		methods:{
			backtop1(){
				this.bs.scrollTo(0,0,500)
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		margin-top: 110px;
		
	}
	.content{
		position: absolute;
		overflow: hidden;
		touch-action: none;
	}
</style>
