import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//console.log(Vuex)


export default new Vuex.Store({
	//状态对象
	state: {
		message: 'hello world123',
		count: 10
	},
	//触发状态
	mutations: {
		handle(state, val){
			console.log('handle方法执行了')
			state.message = val.mes
		}
	},
	//相当于属性计算
	getters: {
		num2(state){//属性计算的getter方法，不能用箭头函数，在箭头函数中，this始终指向声明的对象
			return state.count*2
		},
		num3(state){//属性计算的getter方法，不能用箭头函数，在箭头函数中，this始终指向声明的对象
			return state.count*3
		},
		num4(state){//属性计算的getter方法，不能用箭头函数，在箭头函数中，this始终指向声明的对象
			return state.count*4
		}
	},
	//异步执行的方法， 而mutations中的方法是同步执行的
	actions: {
//		handleAction({commit}){
//			commit('handle', {mes: 'test handleAction'})
		handleAction(context){
			context.commit('handle', {mes: 'test handleAction'})
			//context上下文，指的是new Vuex.Store()创建的对象
			console.log('handleAction执行了')
//			console.log(context)
			
		}
		
	}
	
	
})














