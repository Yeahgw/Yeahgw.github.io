<template>
	<div class="container">
		<header>
			<div class="title_box">
				<p class="title">guoweiYeah's Blog</p>
			</div>
		</header>

		<div class="content">
			<div class="left-tab">
				<ul class="blog-list">
					<li class="blog-item">
						<a href="/detail.html">detail</a>
					</li>
					<li class="blog-item">
						<a href="javascript:;">blog2</a>
					</li>
					<li class="blog-item">
						<a href="javascript:;">blog3</a>
					</li>
					<li class="blog-item">
						<a href="javascript:;">blog4</a>
					</li>
					<li class="blog-item">
						<a href="javascript:;">blog5</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	require("@/css/common.scss");
	export default{

	}
</script>

<style>
	html,body{
		height: 100%;
	}
	.container{
		margin: 0 auto;
		width: 90%;
		height: 100%;
		transition: all ease .2s;
	}
	header{
		position: fixed;
		top: 0;
		left: 0;
		height: 60px;
	}
	.content{
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		padding-top: 60px;
		height: 100%;
	}
	.left-tab{
		flex: 0 0 300px;
		background: #f7f7f7;
	}
	.left-tab a{
		display: block;
		color: #1a1a1a;
		line-height: 24px;
	}
</style>