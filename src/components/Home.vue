<template>
	<div class="box">
		<div class='closeWrapper'>
			<button class="close" @click="close"></button>
		</div>
		<!-- 时间数字显示 -->
		<div class="time">{{ currentTime }}</div>
		<!-- 闹铃设置按钮 -->
		<div class="ringbtn iconfont icon-tixing"></div>
		<!-- 闹铃调节时间按钮 -->
		<div class="add">+</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onBeforeUnmount
	} from 'vue'
	let timer = ref()
	// let currentTime = ref(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
	let currentTime = ref("00:00:00")
	let appendZero = (obj) => {
		if (obj < 10) {
			return "0" + obj
		} else {
			return obj
		}
	}
	onMounted(() => {
		timer = setInterval(() => {
			var hour = appendZero(new Date().getHours())
			var minute = appendZero(new Date().getMinutes())
			var second = appendZero(new Date().getSeconds())
			//修改数据date
			currentTime.value = hour + ":" + minute + ":" + second
		}, 1000)
	})

	onBeforeUnmount(() => {
		clearInterval(timer)
		timer = ref();
	})
	const close = () => {
		app.close()
	}
</script>

<style scoped>
	/* 清空默认样式 */
	* {
		margin: 0;
		padding: 0;
		-webkit-app-region: drag;
	}

	/* 背景颜色 */
	body {
		background: rgba(0, 0, 0, 0.1);
		transition: all .3s;
	}

	/* 闹钟主体 */
	.box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 500px;
		height: 250px;
		background: rgba(255, 255, 255, 0.7);
		box-shadow:
			0 20px 20px white inset,
			0 -20px 20px rgba(0, 0, 0, 0.3) inset,
			0 30px 30px rgba(0, 0, 0, 0.3);
		border-radius: 20px;
	}

	/* 时间显示样式 */
	.box>.time {
		width: 250px;
		height: 100px;
		background: rgba(70, 73, 76, 0.7);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5) inset;
		text-align: center;
		line-height: 100px;
		font-size: 50px;
		color: rgba(255, 255, 255, 0.7);
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
		font-weight: 900;
	}

	/* 闹铃功能按键样式 */
	.box>.ringbtn,
	.add {
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 20px;
		box-shadow:
			0 10px 10px white inset,
			0 -10px 10px rgba(0, 0, 0, 0.2) inset,
			0 5px 5px rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 10%;
		transform: translateY(-50%);
		color: rgba(0, 0, 0, 0.5);
		cursor: pointer;
		-webkit-app-region: no-drag;
	}

	.box>.add {
		line-height: 45px;
		font-size: 30px;
		font-weight: 900;
		left: 10%;
	}

	@font-face {
		font-family: "iconfont";
		/* Project id 3205880 */
		src: url('https://at.alicdn.com/t/font_3205880_0jbiq8d6kzdm.woff2?t=1645782727790') format('woff2'),
			url('https://at.alicdn.com/t/font_3205880_0jbiq8d6kzdm.woff?t=1645782727790') format('woff'),
			url('https://at.alicdn.com/t/font_3205880_0jbiq8d6kzdm.ttf?t=1645782727790') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-tixing:before {
		content: "\e600";
	}

	.closeWrapper {
		width: 23px;
		height: 23px;
		margin-right: 18px;
		margin-top: 15px;
		float: right;
	}

	.close {
		position: absolute;
		width: 20px;
		height: 20px;
		border: none;
		border-radius: 0;
		background: rgba(0, 0, 0, 0);
		-webkit-app-region: no-drag;
		/* 	border: 1px solid;
		border-radius: 20px; */
	}

	.close::before,
	.close::after {
		position: absolute;
		content: ' ';
		background-color: #cccccc;
		width: 0px;
		height: 13px;
		border: 1px solid;
		left: 9px;
		top: 2px;
	}

	.close::before {
		transform: rotate(45deg);
	}

	.close::after {
		transform: rotate(-45deg);
	}

	.close:hover {
		color: #7c7e80;
	}
</style>
