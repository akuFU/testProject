<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore();

let treatment = ref<string[][]>([]);

function addItem() {

	let sessions: string = "";
	for (let i = 0; i < store.sess.length; i++)
		if (store.sess[i])
			sessions += i+1 + ", ";
	sessions = sessions.substring(0, sessions.length-2);

	treatment.value.push([store.form.preparHome, store.form.intakeTypeHome, store.form.doseHome, store.form.krat, store.datesRange.home[0], store.datesRange.home[1], store.dates.home + "" ]);

}

function deleteItem(index: number) {

	treatment.value.splice(index, 1);

}

</script>

<template>

	<div>
				
		<button class = "border-2 border-gray-400 px-5 py-1 rounded-md text-gray-400" @click = "addItem()">Добавить</button>
	
	</div>

	<span>Лечение на дому</span>	

	<div class = "border-2 p-3 w-[620px]">

		<div v-for = "(item, index) in treatment">

			<div class = "flex gap-8">

				<span>{{ item[0] }}</span>
				<span>{{ item[1] }}</span>
				<span>{{ item[2] }}</span>

			</div>

			<div class = "flex gap-8">

				<span>{{ item[3] }}</span>
				<div>
					<span>с {{ item[4] }}</span>
					<span> по {{ item[5] }}</span>
				</div>
				<span>{{ item[6] }} дней</span>

			</div>

		</div>

	</div>

</template>

<style scoped>

</style>
