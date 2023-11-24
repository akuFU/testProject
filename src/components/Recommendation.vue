<script setup lang="ts">
import { ref } from 'vue'

let input = ref<string>("");
let recommendation = ref<string>("");

function addItem() {

	recommendation.value += input.value + "\n";
	console.log(recommendation.value);

}

</script>

<template>

	<div class = "grid gap-6 my-6">

		<div class = "flex gap-3">

			<input id = "addInput" class = "border-2 py-1 w-[568px] placeholder:text-black" placeholder = "Добавить новую запись" v-model = "input" />
			<button class = " border-2 flex justify-center px-2 w-[40px]" @click = "addItem()"><img width = "14" src = "@/assets/plus.svg" /></button>

		</div>

		<div>

			<textarea class = "border-2 resize-none h-[100px] w-[620px] placeholder:text-black" placeholder = "Рекомендации лечащего врача пациенту" v-model = "recommendation"></textarea>

		</div>

	</div>

</template>

<style scoped>

</style>
