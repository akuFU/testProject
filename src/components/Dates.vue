<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore();
let start: string = "";
let end: string = "";

const props = defineProps<{

	date: any
	dKey: string

}>();

function calcDate() {

	if (start.length > 0 && end.length > 0) {

		let diff = new Date(end).getTime() - new Date(start).getTime();
		let diffDays = diff / (1000 * 3600 * 24);
		props.date[props.dKey] = diffDays;
		store.datesRange[props.dKey as keyof typeof store.datesRange][0] = start;
		store.datesRange[props.dKey as keyof typeof store.datesRange][1] = end;

	}

}
</script>

<template>

	<div class = "flex gap-3">

		<div class = "flex flex-col gap-3">

			<span>Начало приёма:</span>

			<input class = "border-2 py-1 w-[170px]" type = "date" v-model = "start" @change = "calcDate()" />

		</div>

		<div class = "flex flex-col gap-3">

			<span>Конец приёма:</span>

			<input class = "border-2 py-1 w-[170px]" type = "date" v-model = "end" @change = "calcDate()" />

		</div>

		<span v-if = "props.dKey != 'home'" class = "relative top-10">Количество сеансов: <span class = "text-blue-400">{{ store.sessNum.length }}</span></span>

		<span v-if = "props.dKey == 'home'" class = "relative top-10">Количество дней: <span class = "text-blue-400">{{ store.dates.home }}</span></span>

	</div>

</template>

<style scoped>

</style>
