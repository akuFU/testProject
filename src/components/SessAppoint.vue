<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore();

let session = ref({

	program: "Программа",
	dial: "Диализатор",
	conc: "Концентратор Объём",
	needles: "Игла/Катетер",
	bicVol: "Бикарбонат мл",
	antiName: "Антикоагуляция ед.",
	weightVol: "Сухой вес кг."

})

function makeSess() {

	for (let i in session.value)
	//@ts-ignore
		session.value[i as keyof typeof session.value] = store.form[i as keyof typeof store.form] ? store.form[i as keyof typeof store.form] : store[i];

	session.value.conc += " " + store.concVol;
	session.value.needles = store.injection == "Игла" ? store.form.needles + " " + store.form.needleType : store.form.kater + " " + store.form.katerType;
	session.value.antiName += " " + store.antiVol;

}

</script>

<template>

	<div>
				
		<button class = "border-2 border-gray-400 px-8 py-1 rounded-md text-gray-400" @click = "makeSess()">Сформировать сеанс</button>
	
	</div>

	<div class = "border-2 grid gap-3 my-8 p-3 w-[640px] [&_*]:font-bold">

		<div>Назначения сеанса гемодиализа</div>

		<div class = "[&>*]:inline">

			<img width = "20" src = "@/assets/monitor.svg" />
			<span class = "ml-3 mr-5">-{{ session.program }}</span>

			<img width = "20" src = "@/assets/dial.svg" />
			<span class = "ml-3 mr-5">-{{ session.dial }}</span>

		</div>

		<div class = "[&>*]:inline">

			<img width = "20" src = "@/assets/vial.svg" />
			<span class = "ml-3 mr-5">-{{ session.conc }}</span>

			<img width = "20" src = "@/assets/needle.svg" />
			<span class = "ml-3 mr-5">-{{ session.needles }}</span>					
			<img width = "20" src = "@/assets/beaker.svg" />
			<span class = "ml-3 mr-5">-{{ session.bicVol }}</span>

		</div>

		<div class = "[&>*]:inline">

			<img width = "20" src = "@/assets/beaker.svg" />
			<span class = "ml-3 mr-5">-{{ session.antiName }}</span>

			<img width = "20" src = "@/assets/weight.svg" />
			<span class = "ml-3 mr-5">-{{ session.weightVol }}</span>

		</div>

	</div>


</template>

<style scoped>

</style>
