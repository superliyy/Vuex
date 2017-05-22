<template>
  <div class="hello">
    <h1>这是Hello组件</h1>
    
    <p>{{$store.state.message}}</p>
    
    <br />操作<br />
    <input type="text" v-model="inputVal" />
    
    <button @click="handle({mes: inputVal})">传值</button>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'hello',
  data(){
  	return {
  		inputVal: ''
  	}
  },
  methods:{
  	...mapMutations([
  		'handle'
  	])
  },
  mounted(){
  	console.log(this.$store.state.message)
  }
}
</script>

<style>


</style>
