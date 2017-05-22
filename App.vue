<template>
  <div id="app">
    <h1> hello vuex </h1>
   	
   	<p>1.{{ $store.state.message }}</p>
   	<p>2.{{ message }}</p>
   	<p>count:{{count}}</p>
   	<p>num2:{{num2}}</p>
   	<p>c:{{c}}</p>
    
    <button @click="btnAction()">按钮1</button>
    <button @click="$store.commit('handle', {mes:'hi Vuex', num: 10})">按钮2</button>
    <button @click="handle({mes: 'hi'})">按钮3</button>
    <button @click="handleAction()">按钮4</button>
    
    <br />操作<br />
    <input type="text" v-model="inputVal" />
    <button @click="handle({mes: inputVal})">传值</button>
    
    
    
    
    <hr />
    <router-view></router-view>
    
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import store from './store.js'

console.log(1)
console.log(store)


console.log()

export default {
  name: 'app',
  mounted(){
  	console.log(this.count)
  },
  
data(){
	return {
		inputVal: '',
		a: 10,
		b: 20
//		message: this.$store.state.message
	}
},

//	computed: {
//		message(){
//			return 'hi'
//		}
//	},

//	computed: mapState({
//		message: function(state){
//			return state.message
//		}
//	}),

		//属性计算，将store上的状态和本组件的属性相关联
//		computed: mapState({
//			message: state=>state.message,
//			count: state=>state.count
//		}),
		computed: {
			...mapState([
				'message',
				'count'
			]),	
			c: function(){
				return this.a+this.b
			},
			...mapGetters([
				'num2'
			])
		},


  methods: {
  	...mapMutations([
  		'handle'
  	]),
  	...mapActions([
  		'handleAction'
  	]),
  	
  	btnAction(){
  		//触发状态handle
  		//参数1： 执行$store的mutations方法
  		//剩余的参数： 执行方法时传入的参数
  		this.$store.commit('handle', {
  			mes:'hi Vuex', 
  			num: 10
  		});
  	}
  }
}
</script>

<style>


</style>
