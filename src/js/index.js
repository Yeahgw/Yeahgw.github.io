import vue from 'vue';
import vueRouter from 'vue-router';

new vue({
	el: '#app',
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
