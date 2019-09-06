<template>
	<div class="shouye">
		<auto></auto>
		<div class="body">
			<div class="bodyer">
				<div class="zhibo">
					<div class="left">
						<i></i>
						<span>全部直播</span>
					</div>
					<div class="right">
						<span>更多</span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiAgMAAABHKeNRAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAA/v7+3d3gx8fMPk7SlAAAAAF0Uk5TAEDm2GYAAAA5SURBVBjTY2DADgJgDMYlMBbbTxiL6Z8DjLl/Aoyl/wTG4qahQgQLIQvXgTCFusoQPkeEBiKEMAAAE/sfzUAUIwUAAAAASUVORK5CYII=" alt="">
					</div>
				</div>
				<ul class="sai clearfix">
					<li v-for="(item,index) in arr" :key="item.id">
						<div class="top">
							<img  v-lazy="item.img" alt="">
							<span>{{item.text1}}</span>
						</div>
						<div class="bottom">
							<p class="title">{{item.text2}}</p>
							<p class="pelop">
								<span>{{item.text3}}</span>
								<span>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAABGdBTUEAALGPC/xhBQAAAGlQTFRF19fa1tfa1tfZ19fa19fa3Nzc19ja2NjZ1tja1tfa3t7e2Njb29vb////////19ja1tja19fa39/f1tjZ19fb2dnZ19jZ1tjZ19ja6urq19vb1tfa1tra2tra19fa19jZ19jaAAAA1tfZGivBKgAAACJ0Uk5TwNvnmW0k/pXv6B9pIwMF/eLGCKOGNtfD8Qw/wUUiYPKqAAOSs+4AAAB+SURBVBjTZc5HDsAgDERRp/dGegV8/0NGwZIhyd8gvw0D+hPQs27b6sIlEeVl4UDTwbAT7AwLwcIwEUwMA8HAILrn7oT9tiqUKip32G9pXZa1hbFvG8Sm7UcD54zcfGrIM3TKclD4SkH6hhSS2L3jBHQUBuD5UvoeBGH0H3YD0/ElPaaDZeMAAAAASUVORK5CYII=" alt="">
									{{item.text4}}
								</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="ying">
				<div class="zhibo">
					<div class="left">
						<i></i>
						<span>英雄联盟</span>
					</div>
					<div class="right">
						<span>更多</span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiAgMAAABHKeNRAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAA/v7+3d3gx8fMPk7SlAAAAAF0Uk5TAEDm2GYAAAA5SURBVBjTY2DADgJgDMYlMBbbTxiL6Z8DjLl/Aoyl/wTG4qahQgQLIQvXgTCFusoQPkeEBiKEMAAAE/sfzUAUIwUAAAAASUVORK5CYII=" alt="">
					</div>
				</div>
				<ul class="sai clearfix">
					<li v-for="(item,index) in abb" :key="item.id">
						<div class="top">
							<img alt="" v-lazy="item.img">
							<span>{{item.text1}}</span>
						</div>
						<div class="bottom">
							<p class="title">{{item.text2}}</p>
							<p class="pelop">
								<span>{{item.text3}}</span>
								<span>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAABGdBTUEAALGPC/xhBQAAAGlQTFRF19fa1tfa1tfZ19fa19fa3Nzc19ja2NjZ1tja1tfa3t7e2Njb29vb////////19ja1tja19fa39/f1tjZ19fb2dnZ19jZ1tjZ19ja6urq19vb1tfa1tra2tra19fa19jZ19jaAAAA1tfZGivBKgAAACJ0Uk5TwNvnmW0k/pXv6B9pIwMF/eLGCKOGNtfD8Qw/wUUiYPKqAAOSs+4AAAB+SURBVBjTZc5HDsAgDERRp/dGegV8/0NGwZIhyd8gvw0D+hPQs27b6sIlEeVl4UDTwbAT7AwLwcIwEUwMA8HAILrn7oT9tiqUKip32G9pXZa1hbFvG8Sm7UcD54zcfGrIM3TKclD4SkH6hhSS2L3jBHQUBuD5UvoeBGH0H3YD0/ElPaaDZeMAAAAASUVORK5CYII=" alt="">
									{{item.text4}}
								</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="fixed">
			<div>
				<img src="https://a.msstatic.com/huya/mobile/widget/rightSide/img/right_side_toTop_d9bf07a.png" alt="">
				<p>顶部</p>
			</div>
			<div>
				<img src="https://a.msstatic.com/huya/mobile/widget/rightSide/img/right_sidefree_back_04ebba2.png" alt="">
				<p>
					反馈
				</p>
			</div>
			<div>
				<img src="https://a.msstatic.com/huya/mobile/widget/rightSide/img/right_side_kaibo_5f006db.png" alt="">
				<p>开播</p>
			</div>
		</div>
	</div>
</template>

<script>
	import  auto from "@/components/lunbo/auto"
	// import {Lazyload} from 'mint-ui'
	// import Vue from "vue"
	export default{
		data(){
			return{
				arr:[
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1018/ba/37066c6e3973d795d3dcdcf16da56c_5133_1559027687.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1005/51/456bd1fcf9acca504ae84a8b20c5f8_0_1564145774.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1005/51/456bd1fcf9acca504ae84a8b20c5f8_0_1564145774.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://live-cover.msstatic.com/huyalive/78941969-2620501270-11254967253776465920-3120368170-10057-A-0-1/20190818183236.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					}
				],
				abb:[
					{
						img:"https://live-cover.msstatic.com/huyalive/78941969-2665571774-11448543594470703104-3120471196-10057-A-0-1/20190818191629.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1072/bd/8c8dc2071fca5f917cc84372eed4cb_0_1565924301.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://live-cover.msstatic.com/huyalive/64277750-64277750-276070834110464000-1801766090-10057-A-0-1/20190818191639.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://live-cover.msstatic.com/huyalive/78941969-2559461636-10992804021986656256-3233009480-10057-A-0-1/20190818191631.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1018/ba/37066c6e3973d795d3dcdcf16da56c_5133_1559027687.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1005/51/456bd1fcf9acca504ae84a8b20c5f8_0_1564145774.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://anchorpost.msstatic.com/cdnimage/anchorpost/1005/51/456bd1fcf9acca504ae84a8b20c5f8_0_1564145774.jpg?imageview/4/0/w/338/h/190/blur/1",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					{
						img:"https://live-cover.msstatic.com/huyalive/64277750-64277750-276070834110464000-1801766090-10057-A-0-1/20190818191639.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90",
						text1:"英雄联盟",
						text2:"LNG vs SN LPL夏季赛",
						text3:"LPL夏季赛",
						text4:"558.7万"
					},
					
				]
			}
		},
			components:{
				auto
			},
			mounted() {
				// Vue.use(Lazyload);
			}
	}
</script>

<style scoped>
	.shouye{
		margin-top: 100px;
	}
	div{
		margin-top:0px ;
	}
	.clearfix:after{
		content: "";
		clear: both;
		display: block;
		height: 0;
		visibility: hidden;
	}
	.zhibo{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.zhibo .left{
		margin-left: 10px;
	}
	.zhibo .left i{
		width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
	background-image: url(https://livewebbs2.msstatic.com/huya_hot_rec_theme_logo_1530671178.png);
	vertical-align: middle;
	}
	.zhibo .left span{
		vertical-align: middle;
	}
	.zhibo .right span{
		vertical-align: middle;
		font-size: 14px;
	}
	.zhibo .right img{
		vertical-align: middle;
		width: 25%;
	}
	.sai{
		width: 97%;
		margin-left: 9px;
		margin-bottom: 27px;
	}
	.sai li{
		width: 47%;
		float: left;
		position: relative;
		margin-right:10px ;
		margin-top: 10px;
		list-style: none;
	}
	.sai li .top{
		position: relative;
	}
	.sai li .top img{
		width: 100%;
		border-radius: 5px 5px;
	}
	.sai li .top span{
		position: absolute;
		color: #eee;
    background: rgba(44,49,54,.7);
	top: 0;
	font-size: 12px;
	right: 5px;
	padding: 2px 5px;
	}
	.sai li .bottom .title{
		font-size: 13px;
	}
	.sai li .bottom p{
		line-height: 17px;
	}
	.sai li .bottom .pelop{
		display: flex;
		justify-content: space-between;
	}
	.sai li .bottom span{
		font-size: 10px;
		color: #999;
	}
	.sai li .bottom span img{
		width: 20%;
	}
	.ying .zhibo i{
		background-image: url(https://livewebbs2.msstatic.com/huya_hot_rec_theme_logo_1559566038.png);
	}
	.fixed{
		position: fixed;
		right: 0;
		bottom: 100px;
		/* background: #007AFF; */
		z-index: 10;
	}
	.fixed div{
		margin-top: 5px;
		background: rgba(46,46,58,.85);
		text-align: center;
		padding-top: 3px;
		width: 30px;
	}
	.fixed div img{
		width: 50%;
	}
	.fixed div p{
		text-align: center;
		color: white;
		font-size: 12px;
	}
</style>
