<template>
	<div class="container">
		<header class="header">
			<div class="title_box">
				<p class="title">guoweiYeah's Blog</p>
			</div>
		</header>

		<div class="content">
			<div class="left_tab">
				<ul class="blog_list">
					<li class="blog_item active">
						<a href="/detail.html">detail</a>
					</li>
					<li class="blog_item">
						<a href="javascript:;">首页渲染效率</a>
					</li>
					<li class="blog_item">
						<a href="javascript:;" title="减少网页白屏时间减少网页白屏时间">减少网页白屏时间减少网页白屏时间</a>
					</li>
					<li class="blog_item">
						<a href="javascript:;">blog4</a>
					</li>
					<li class="blog_item">
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

<style lang="scss">
	$mainColor: #20232a;
	$lighthighColor: #61dafb;
	
	$headerHeight: 60px;
	html,body{
		height: 100%;
	}
	.container{
		margin: 0 auto;
		width: 90%;
		height: 100%;
		transition: all ease .2s;
	}
	.header{
		position: fixed;
		top: 0;
		left: 0;
		padding: 0 5%;
		width: 100%;
		height: $headerHeight;
		color: #fff;
		background: $mainColor;
	}
	.header .title_box .title{
		font-weight: bold;
		line-height: $headerHeight;
	}
	.content{
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		padding-top: $headerHeight;
		height: 100%;
	}
	.left_tab{
		flex: 0 0 300px;
		padding-left: 40px;
		height: 100%;
		background: #f7f7f7;
		overflow: auto;
	}
	.left_tab .blog_list{
		padding-right: 10px;
	}
	.left_tab .blog_item{
		position: relative;
		margin-top: 5px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.left_tab .blog_item.active:after{
		content: '';
		position: absolute;
		left: -20px;
		top: 0;
		width: 5px;
		height: 100%;
		background: $lighthighColor;
	}
	.left_tab a{
		display: inline-block;
		color: #1a1a1a;
		line-height: 24px;
	}
	.left_tab a:hover{
		color: #6d6d6d;
	}
	.left_tab .blog_item.active a{
		font-weight: bold;
	}
</style>