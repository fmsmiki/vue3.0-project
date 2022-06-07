<template>
	<div class="list">
		<transition name="el-zoom-in-center">
			<div v-show="switchClass" class="left-box">
				<div class="left-top-box">
					<div class="input-box">
						<el-input
						    placeholder="请输入文章名称"
						    prefix-icon="el-icon-search"
						    v-model="searchValue">
			  			</el-input>
					</div>
				</div>
				<div class="left-bottom-box"></div>
			</div>
		</transition>	
		<div :class="['right-box','',{'switch-add': !switchClass}]">
			<div :class="['top-box','',{'switch-add': !switchClass}]">
				<h2>微信小程序文章标题</h2>
				<div class="top-box-right">
					<span><i class="el-icon-s-home"></i>首页</span>
					<span @click="moonClick"><i class="el-icon-moon"></i>夜间</span>
					<span>书签<i class="el-icon-caret-bottom"></i></span>
				</div>
			</div>
			<div class="conten-box markdown-body">
				<index></index>				
			</div>
			<div @click="switchClick" class="switch-box">
				<i v-if="switchClass" class="el-icon-s-fold"></i>
				<i v-else class="el-icon-s-unfold"></i>
			</div>
			<div class="back-top">
				<i class="el-icon-top"></i>
			</div>
		</div>
	</div>
</template>

<script>
import index from '../assets/index.md';	
export default {
  name: 'list',
  data () {
  	return {
  		searchValue: '',
  		switchClass: true
  	}
  },
  components: {
  	index	
  },
  mounted () {
	
  },
  methods: {
  	switchClick () {
  		this.switchClass = !this.switchClass;
  	},
  	moonClick () {
  		if (document.getElementsByTagName('html')[0].className) {
  			document.getElementsByTagName('html')[0].className = '';
  		} else {
  			document.getElementsByTagName('html')[0].className = 'moon';
  		}		
  	}
  }
}
</script>

<style lang="scss" scoped>
.list {
	width: 100%;
	height: 100%;
	
	.left-box {
		width: 20%;
		height: 100%;
		border-right: 1px solid #dddddd;
		box-sizing: border-box;
		float: left;
		
		.left-top-box {
			width: 100%;
			height: 55px;
			line-height: 55px;
			border-bottom: 1px solid #dddddd;
			box-sizing: border-box;	
		}
		.input-box {
			width: 90%;
			margin: 0 auto;			
		}
	}
	.right-box {
		width: 80%;
		height: 100%;
		float: left;
		position: relative;
		overflow: auto;
		
		.top-box {
			width: 80%;
			height: 55px;
			line-height: 55px;
			border-bottom: 1px solid #DDDDDD;
			padding: 0 40px 0 20px;
			box-sizing: border-box;
			background: #FFFFFF;		
			position: fixed;			
			
			h2, {
				width: 20%;
				display: inline-block;
				font-size: 16px;
			}
			.top-box-right {
				/*width: 80%;*/
				float: right;
				text-align: right;	
				
				span {
					width: 70px;
					display: inline-block;
					text-align: center;
					font-size: 14px;
					color: #222222;
					cursor: pointer;
					
					i {
						margin: 0 3px;
					}
				}
			}
		}
		.conten-box {
			width: 900px;
			margin: 90px auto;
		}
		.switch-box {
			position: fixed;
			top: 65px;
			margin-left: 20px;
			font-size: 20px;
			cursor: pointer;
			color: #666666;
		}
		.back-top {
			width: 40px;
			height: 40px;
			border-radius: 5px;
			/*background-color: rgba(220, 220, 220,.3);*/
			background: #FFFFFF;
			box-shadow: 5px 5px 5px  #DDDDDD;
			border: 1px solid #DDDDDD;
			position: fixed;
			bottom: 65px;
			right: 50px;
			font-size: 20px;
			cursor: pointer;
			color: #000;
			text-align: center;
			line-height: 40px;
		}
	}
	.switch-hide {
		display: none;
	}
	.switch-add {
		width: 100% !important;		
	}
}
</style>