<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

let amount = 7;
const store = useStore();
let sess = useStore().sess;

function change(index: number) {

	store.sessNum = [];
	sess[index] = !sess[index]
	for (let i in sess)
		if (sess[i])
			store.sessNum.push(parseInt(i)+1);

	console.log(useStore().sessNum);

}

</script>

<template>

	<div class = "flex flex-col gap-3">

		<span>Номера сеансов:</span>

		<div class = "flex gap-4">

			<div v-for = "(item, index) in sess" :class = "[item ? 'border-2 bg-blue-400 text-white' : 'border-2 text-black']" class = "px-5 py-3 hover:cursor-pointer" @click = "change(index)">
		
				{{ index + 1 }}	

			</div>

		</div>

	</div>

</template>

<style scoped>

</style>
