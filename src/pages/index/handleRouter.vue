<template>
	<div class="blog_content">
		{{blogId}}
		<transition name="fadeIn" mode="out-in">
			<keep-alive>
				<component :is="currentView" class="main_content">
				</component>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import blogMapping from './blog.json';
	export default {
		props: ['blogId'],
		components: {
			blog1: resolve =>{
				require.ensure(['./blogs/blog1.vue'], ()=>{
					resolve(require('./blogs/blog1.vue'))
				}, 'blog1');
			},
			blog2: resolve =>{
				require.ensure(['./blogs/blog2.vue'], ()=>{
					resolve(require('./blogs/blog2.vue'))
				}, 'blog2');
			},
			blog4: resolve =>{
				require.ensure(['./blogs/blog4.vue'], ()=>{
					resolve(require('./blogs/blog4.vue'))
				}, 'blog4');
			}			
		},
		data(){
			return {
				currentView: ''
			}
		},
		methods:{
			loopBlog: (val)=>{
				if(!val || val == ''){
					return val;
				}

				for(let i = 0; i < blogMapping.length; i++){
					let reg = new RegExp('^' + blogMapping[i].type);
					if( reg.test(val) ){
						let temp_blogs = blogMapping[i].blogs;
						for(let j = 0; j < temp_blogs.length; j++){
							if(temp_blogs[j].id == val){
								return temp_blogs[j].component;
							}
						}
					}
				}
			}
		},
		watch: {
			blogId: function(val){
				this.currentView = this.loopBlog(val);
			}
		},
		mounted(){
			this.$nextTick(() => {
				this.currentView = this.loopBlog(this.blogId);
			})
		}
	}
</script>

<style lang="scss">
	.main_content{
		transform: translateY(0);
	}
	.fadeIn-enter-active, .fadeIn-leave-active{
		transition: all 0.5s ease;
	}
	.fadeIn-enter, .fadeIn-leave-active{
		opacity: 0;
		transform: translateY(10%);
	}
</style>

