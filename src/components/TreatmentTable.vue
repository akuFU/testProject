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

	treatment.value.push([store.form.prepar, store.form.intakeType, store.form.dose, store.datesRange.afterSes[0], store.datesRange.afterSes[1], sessions, store.dates.afterSes + "" ]);

}

function deleteItem(index: number) {

	treatment.value.splice(index, 1);

}

</script>

<template>

	<div>
				
		<button class = "border-2 border-gray-400 px-5 py-1 rounded-md text-gray-400" @click = "addItem()">Сформировать</button>
	
	</div>

	<span>Список назначений после сеансов</span>

	<table class = "border-collapse border-slate-500">

		<thead class = "[&_*]:border-2 [&_*]:font-normal [&_*]:p-2 [&_*]:text-left">

			<th>Лекарственный препарат</th>						
			<th>Путь приема</th>						
			<th>Дозировка</th>						
			<th>Начало приёма</th>						
			<th>Конец приёма</th>						
			<th>Номер сеанса</th>						
			<th>Дней</th>						
			<th></th>						

		</thead>

		<tbody>

			<tr v-for = "(item, index) in treatment">

				<td class = "border-2 px-2 py-2">{{ item[0] }}</td>
				<td class = "border-2 px-2 py-2">{{ item[1] }}</td>
				<td class = "border-2 px-2 py-2">{{ item[2] }}</td>
				<td class = "border-2 px-2 py-2">{{ item[3] }}</td>
				<td class = "border-2 px-2 py-2">{{ item[4] }}</td>
				<td class = "border-2 px-2 py-2">{{ item[5] }}</td>
				<td class = "border-2 px-2 py-2">{{ item[6] }}</td>
				<td class = "border-2 px-2 py-2">									<div class = "flex justify-center">
						<button @click = "deleteItem(index)">
							<img class = "min-w-[14px]" src = "@/assets/trash.svg" />
						</button>
					</div>
				</td>

			</tr>

		</tbody>

	</table>

</template>

<style scoped>

</style>
