import vue from 'vue';
import vueRouter from 'vue-router';
import index from '../pages/index/index.vue';
vue.use(vueRouter);

let router = new vueRouter({
	routes: [
		{
			path: '/blog/:blogId',
			component: resolve => {
				require.ensure(['../pages/index/handleRouter.vue'], ()=>{
					resolve(require('../pages/index/handleRouter.vue'));
				}, 'handleRouter')
			},
			props: true
		}
	]
})

new vue({
	el: '#app',
	render: h=>h(index),
	router,
	mounted(){
		this.$nextTick(()=>{
			//异步加载axios, 以最快速度呈现首屏
			require.ensure(['axios'], (require)=>{
				require(['axios'], (res)=>{
					vue.prototype.$http = res;
					//this.$http.get('data.json').then((res)=>{}, err=>{alert('wrong')});
				});
			}, 'axios')
		})
	}
})
