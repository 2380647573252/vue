<template>
	<div>
		<div class="topon" >
			<img src="https://a.msstatic.com/huya/mobile/img/game_0.5_z_7ca7446.png" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				dd:true,
			}
		}
	}
</script>

<style scoped>
	.topon{
		position:fixed;
		bottom: 100px;
		right: 20px;
		background: #000000;
		z-index: 1000;
	}
</style>
