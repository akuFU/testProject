<script setup lang="ts">
import { useStore } from '@/stores/store'
import { ref } from 'vue'
import type { Ref } from 'vue'

const store = useStore();
let searched = ref<string[]>(store.main);

function addItem() {
	
	let value = (<HTMLInputElement>document.querySelector("#addInput")).value;
	store.main.push(value);
	searched.value = store.main;
	(<HTMLInputElement>document.querySelector("#addInput")).value = "";

}

function searchItem() {

	let searchItem = (<HTMLInputElement>document.querySelector("#searchInput")).value.toLowerCase();
	searched.value = [];
	for (let i of store.data[store.arrInd as keyof typeof store.data])
		if (i.toLowerCase().includes(searchItem))
			searched.value.push(i);
		else searched.value.push("");
	console.log(store.data);

}

function deleteItem(index: number) {

	store.main.splice(index, 1);
	searched.value = store.main;
	(<HTMLInputElement>document.querySelector("#searchInput")).value = "";

}

</script>

<template>

	<div class = "fixed flex justify-center items-center inset-0 z-10">

		<div class = "absolute bg-gray-300 flex justify-center items-center inset-0 opacity-70 z-10"></div>

		<div class = "absolute bg-white border-2 border-gray-300 grid gap-5 px-3 py-5 z-20">

			<span class = "font-bold">Лекарственные препараты</span>
			<div> 

				<button class = "border-2 border-gray-400 px-8 py-1 rounded-md text-gray-400" @click = "store.modalVis = false">Закрыть</button>

			</div>

			<div class = "grid grid-cols-[400px_auto] gap-3">

				<input id = "searchInput" class = "border-2 py-1 placeholder:text-black" placeholder = "Поиск позиции по первым символам" />
				<button class = "bg-gray-100 border-2 px-2" @click = "searchItem()"><img width = "26" src = "@/assets/magn.svg" /></button>

			</div>

			<div class = "grid grid-cols-[400px_auto] gap-3">

				<input id = "addInput" class = "border-2 py-1 placeholder:text-black" placeholder = "Добавить новую запись" />
				<button class = "bg-gray-100 border-2 flex justify-center px-2" @click = "addItem()"><img width = "20" src = "@/assets/plus.svg" /></button>

			</div>

			<table class = "border-collapse border-slate-500">
	
				<tbody>

					<tr v-for = "(item, index) in searched" class = "">

						<td v-if = "item != ''" class = "border-2 px-2 py-2 relative w-[410px]">
							<div class = "flex justify-between">
								<span>{{ item }}</span> 
								<button @click = "deleteItem(index)">
									<img width = "14" src = "@/assets/trash.svg" />
								</button>
							</div>

						</td>

						<td v-if = "item != ''" class = "border-2">

							<div class = "flex justify-center relative right-1">
							<button class = "arrow next" @click = "store.setValue(index)"></button>
							</div>

						</td>

					</tr>

				</tbody>

			</table>

		</div>

	</div>

</template>

<style scoped>

.arrow {
	display: inline-block;
	width: 14px;
	height: 14px;
	background: transparent;
	border-top: 2px solid black;
	border-left: 2px solid black;
	text-decoration: none;
	color: transparent;
}

.arrow.next {
	transform: rotate(135deg);
	right: 0;
}

</style>
