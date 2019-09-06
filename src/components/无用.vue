<template>
	<!-- <div> -->
		<div class="wrapper" ref="aaa">
			<div class="content">
				<slot></slot>
			</div>
		</div>
	<!-- </div> -->
</template>

<script>
	import Bscroll from "better-scroll"
	export default{
		name:"scroll",
		data(){
			return {
				bs:null
			}
		},
		mounted() {
				this.bs=new Bscroll(this.$refs.aaa,{
					probeType:3
				})
		}
	}
</script>

<style>
	.wrapper{
		overflow: hidden;
		position: absolute;
		top: 10px;
		bottom: 20px;
	}
</style>
