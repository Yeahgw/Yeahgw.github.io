<template>
	<div class="blog_content">
		{{blogId}}
	</div>
</template>

<script>
	export default {
		props: ['blogId'],
		mounted(){
			this.$nextTick(()=>{
				console.log(this);
			})
		}
	}
</script>

